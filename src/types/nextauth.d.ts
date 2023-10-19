import NextAuth from "next-auth"
import { JWT } from "next-auth/jwt"
import { Role } from "@prisma/client"

interface User {
    id: string
    name?: string | null
    email: string
    picture?: string | null
    role: Role
    activeStore?: {
        id: string
        name: string
    } | null
}

interface JwtClaims {
    sub: string
    iat: number
    exp: number
    jti: string
}

declare module "next-auth" {
    interface Session {
        user: User
    }
}

declare module "next-auth/jwt" {
    interface JWT extends User, JwtClaims {}
}
