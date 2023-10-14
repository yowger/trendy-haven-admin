import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"

import prisma from "@/lib/prismaDb"
import { zodCustomError } from "@/lib/zodCustomError"
import { authOptions } from "@/config/nextAuthOptions"
import { ProductIdsSchema, ProductInputSchema } from "@/schemas/productSchema"
import type { ProductInput, ProductIds } from "@/schemas/productSchema"

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

        const body: ProductInput = await request.json()
        const parsedBody = ProductInputSchema.parse(body)

        const product = await prisma.product.create({
            data: { name: parsedBody.name, price: parsedBody.price },
        })

        return NextResponse.json({ product }, { status: 201 })
    } catch (error) {
        const zodErrorResponse = zodCustomError(
            error,
            "Failed to create product: invalid data"
        )

        if (zodErrorResponse) {
            return NextResponse.json(zodErrorResponse, { status: 422 })
        }

        console.log("Failed to create product error: ", error)

        return NextResponse.json({ message: "Server Error" }, { status: 500 })
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

        return NextResponse.json(
            { products, pageNumber, pageSize, totalCount },
            { status: 200 }
        )
    } catch (error) {
        console.log("Failed to fetch products: ", error)

        return NextResponse.json({ message: "Server error" }, { status: 500 })
    }
}

interface DeleteProductRequestBody {
    productIds: ProductIds
}

export async function DELETE(request: NextRequest) {
    try {
        const body: DeleteProductRequestBody = await request.json()
        const parsedBody: string[] = ProductIdsSchema.parse(body.productIds)

        const response = await prisma.product.deleteMany({
            where: {
                id: {
                    in: parsedBody,
                },
            },
        })

        return NextResponse.json(
            { message: `${response.count} products deleted` },
            { status: 200 }
        )
    } catch (error) {
        const zodErrorResponse = zodCustomError(
            error,
            "Registration failed: invalid data"
        )

        if (zodErrorResponse) {
            return NextResponse.json(zodErrorResponse, { status: 422 })
        }

        console.log("Failed to delete products: ", error)

        return NextResponse.json({ message: "Server error" }, { status: 500 })
    }
}

// const totalPages = Math.ceil(totalCount / pageSize)

// const requestHeaders = new Headers(request.headers)
// requestHeaders.set("X-Total-Pages", totalPages.toString())
