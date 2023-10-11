import { NextResponse } from "next/server"
import bcrypt from "bcrypt"
import prisma from "@/lib/prismaDb"
import { zodCustomError } from "@/lib/zodCustomError"
import { userRegisterSchema } from "@/schemas/registerSchema"
import type { UserRegister } from "@/schemas/registerSchema"

export async function POST(request: Request) {
    try {
        const body: UserRegister = await request.json()
        const parsedBody = userRegisterSchema.parse(body)
        const { email, password } = parsedBody

        const emailExist = await prisma.user.findUnique({
            where: {
                email,
            },
        })

        if (emailExist) {
            return NextResponse.json(
                { user: null, message: "This email is already taken" },
                { status: 409 }
            )
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await prisma.user.create({
            data: {
                email: email.toLowerCase(),
                password: hashedPassword,
            },
        })

        const { password: createdPassword, ...userWithoutPassword } = user

        return NextResponse.json({ user: userWithoutPassword }, { status: 201 })
    } catch (error) {
        const zodErrorResponse = zodCustomError(
            error,
            "Registration failed: invalid data"
        )
        
        if (zodErrorResponse) {
            return NextResponse.json(zodErrorResponse, { status: 422 })
        }

        console.log("Registration error: ", error)

        return NextResponse.json(
            { message: "Registration Error" },
            { status: 500 }
        )
    }
}
