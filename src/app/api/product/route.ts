import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"

import prisma from "@/lib/prismaDb"
import { zodCustomError } from "@/lib/zodCustomError"
import { authOptions } from "@/config/nextAuthOptions"
import { ProductIdsSchema, ProductInputSchema } from "@/schemas/productSchema"
import type { ProductInput, ProductIds } from "@/schemas/productSchema"

/* 
    one api endpoint for to create product and stocks for now to reduce network request. 
    might separate as the application grows becomes more complex
*/

export async function POST(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions)
        const { user } = session ?? {}

        if (!user) {
            return NextResponse.json(
                { error: "Account not found" },
                { status: 404 }
            )
        }

        if (!user.activeStore) {
            return NextResponse.json(
                { error: "Store id not found" },
                { status: 404 }
            )
        }

        const body: ProductInput = await request.json()
        const parsedBody = ProductInputSchema.parse(body)
        console.log("parsed body: ", parsedBody)
        const { name, category, stocks } = parsedBody

        const product = await prisma.product.create({
            data: { name, categoryId: category, storeId: user.activeStore.id },
        })

        const stocksWithProductId = stocks.map((stock) => ({
            ...stock,
            productId: product.id,
        }))

        const stocksResult = await prisma.stock.createMany({
            data: stocksWithProductId,
        })

        return NextResponse.json(
            { product, stocks: stocksResult },
            { status: 201 }
        )
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
        const session = await getServerSession(authOptions)
        const { user } = session ?? {}

        if (!user) {
            return NextResponse.json(
                { error: "Account not found" },
                { status: 404 }
            )
        }

        if (!user.activeStore) {
            return NextResponse.json(
                { error: "Store id not found" },
                { status: 404 }
            )
        }

        const storeId = user.activeStore.id

        const { searchParams } = new URL(request.url)

        const pageNumber = +(searchParams.get("pageNumber") ?? 0)
        const pageSize = +(searchParams.get("pageSize") ?? 10)
        const skip = pageNumber * pageSize

        const [totalCount, products] = await prisma.$transaction([
            prisma.product.count({
                where: {
                    storeId,
                },
            }),
            prisma.product.findMany({
                skip,
                take: pageSize,
                where: {
                    storeId,
                },
                select: {
                    id: true,
                    name: true,
                    createdAt: true,
                    updatedAt: true,
                    Category: {
                        select: {
                            name: true,
                        },
                    },
                    _count: {
                        select: {
                            Stocks: true,
                        },
                    },
                },
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
