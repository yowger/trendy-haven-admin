import { NextResponse } from "next/server"

import prisma from "@/lib/prismaDb"

export async function GET() {
    try {
        const colors = await prisma.color.findMany({
            select: {
                id: true,
                name: true,
            },
        })

        return NextResponse.json({ colors }, { status: 200 })
    } catch (error) {
        console.log("Failed to fetch sizes: ", error)

        return NextResponse.json({ message: "Server error" }, { status: 500 })
    }
}
