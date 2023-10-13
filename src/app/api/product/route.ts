import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"

import prisma from "@/lib/prismaDb"
import { zodCustomError } from "@/lib/zodCustomError"
import { authOptions } from "@/config/nextAuthOptions"
import { ProductInputSchema } from "@/schemas/productSchema"
import type { Product } from "@prisma/client"

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
        const parsedBody = ProductInputSchema.parse(body)

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

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)

        const pageNumber = +(searchParams.get("pageNumber") ?? 0)
        const pageSize = +(searchParams.get("pageSize") ?? 10)
        const skip = pageNumber * pageSize

        const [totalCount, products] = await prisma.$transaction([
            prisma.product.count(),
            prisma.product.findMany({
                skip,
                take: pageSize,
                orderBy: [
                    {
                        createdAt: "desc",
                    },
                ],
            }),
        ])

        // const totalPages = Math.ceil(totalCount / pageSize)

        // const requestHeaders = new Headers(request.headers)
        // requestHeaders.set("X-Total-Pages", totalPages.toString())

        return NextResponse.json(
            { products, pageNumber, pageSize, totalCount },
            { status: 200 }
        )
    } catch (error) {
        console.log("Failed to fetch products: ", error)

        return NextResponse.json(
            { message: "Failed to fetch products" },
            { status: 500 }
        )
    }
}

export async function DELETE(request: NextRequest) {
    try {
        // ids.

        // const response = await prisma.product.deleteMany({
        //     where: {
        //         id: {
        //             in: [1,2,3,4,5]
        //         }
        //     }
        // })

        return NextResponse.json({}, { status: 200 })
    } catch (error) {
        console.log("Failed to fetch products: ", error)

        return NextResponse.json(
            { message: "Failed to fetch products" },
            { status: 500 }
        )
    }
}
