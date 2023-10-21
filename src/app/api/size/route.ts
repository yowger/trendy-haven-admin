import { NextResponse } from "next/server"

import prisma from "@/lib/prismaDb"

export async function GET() {
    try {
        const sizes = await prisma.size.findMany({
            select: {
                id: true,
                name: true,
                value: true,
            },
        })

        return NextResponse.json({ sizes }, { status: 200 })
    } catch (error) {
        console.log("Failed to fetch sizes: ", error)

        return NextResponse.json({ message: "Server error" }, { status: 500 })
    }
}
