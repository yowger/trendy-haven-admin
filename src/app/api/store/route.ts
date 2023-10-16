import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"

import prisma from "@/lib/prismaDb"
import { zodCustomError } from "@/lib/zodCustomError"
import { authOptions } from "@/config/nextAuthOptions"
import { StoreInputSchema } from "@/schemas/storeSchema"
import type { StoreInput } from "@/schemas/storeSchema"

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

        const body: StoreInput = await request.json()
        const parsedBody = StoreInputSchema.parse(body)
        const { name, address, email, city, zipCode, phoneNumber } = parsedBody

        const store = await prisma.store.create({
            data: {
                name,
                address,
                email,
                city,
                zipCode,
                phoneNumber,
                userId: user.id,
            },
        })

        return NextResponse.json({ store }, { status: 201 })
    } catch (error) {
        const zodErrorResponse = zodCustomError(
            error,
            "Failed to create store: invalid data"
        )

        if (zodErrorResponse) {
            return NextResponse.json(zodErrorResponse, { status: 422 })
        }

        console.log("Failed to create store error: ", error)

        return NextResponse.json({ message: "Server Error" }, { status: 500 })
    }
}
