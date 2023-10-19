import CredentialsProvider from "next-auth/providers/credentials"
import type { AuthOptions } from "next-auth"
import bcrypt from "bcrypt"

import prisma from "@/lib/prismaDb"

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: {
                    label: "email",
                    type: "text",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const { email, password } = credentials ?? {}

                if (!email || !password) {
                    throw new Error("Missing email or password")
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email,
                    },
                    select: {
                        id: true,
                        email: true,
                        role: true,
                        password: true,
                        picture: true,
                    },
                })

                const userPassword = user?.password

                if (!user || !userPassword) {
                    throw new Error("Account not found")
                }

                const isValidPassword: boolean = await bcrypt.compare(
                    password,
                    userPassword
                )

                if (!isValidPassword) {
                    throw new Error("Incorrect password")
                }

                // const store: { id: string } | null =
                //     await prisma.store.findFirst({
                //         where: {
                //             userId: user.id,
                //         },
                //         select: {
                //             id: true,
                //         },
                //     })

                // const storeId: string | null = store?.id ?? null

                const storeId = null

                const { password: _password, ...restOfUser } = user

                return { ...restOfUser, storeId }
            },
        }),
    ],
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60,
    },
    callbacks: {
        async jwt({ user, token, session, trigger }) {
            if (trigger === "update") {
                const { id, name } = session

                token.activeStore = {
                    id,
                    name,
                }
            }

            return { ...user, ...token }
        },
        async session({ session, token, trigger }) {
            const { iat, exp, jti, sub, ...userWithoutClaims } = token as any
            session.user = userWithoutClaims

            return session
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login",
        error: "/login",
    },
}
