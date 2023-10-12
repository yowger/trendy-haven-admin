import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"

import prisma from "@/lib/prismaDb"
import { zodCustomError } from "@/lib/zodCustomError"
import { authOptions } from "@/config/nextAuthOptions"
import { ProductSchema } from "@/schemas/productSchema"
import type { Product } from "@/schemas/productSchema"

export async function POST(request: Request) {
    try {
        const session = await getServerSession(authOptions)
        const { user } = session ?? {}

        if (!user) {
            return NextResponse.json(
                { error: "Account not found" },
                { status: 404 }
            )
        }

        const body: Product = await request.json()
        const parsedBody = ProductSchema.parse(body)

        const product = await prisma.product.create({
            data: { name: parsedBody.name, price: parsedBody.price },
        })

        return NextResponse.json({ product }, { status: 201 })
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
