import { NextRequest, NextResponse } from "next/server"

import prisma from "@/lib/prismaDb"

export async function GET() {
    try {
        const categories = await prisma.category.findMany({})

        return NextResponse.json({ categories }, { status: 200 })
    } catch (error) {
        console.log("Failed to fetch categories: ", error)

        return NextResponse.json({ message: "Server error" }, { status: 500 })
    }
}
