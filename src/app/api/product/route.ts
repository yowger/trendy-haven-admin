import { NextResponse } from "next/server"

import { zodCustomError } from "@/lib/zodCustomError"

export async function POST(request: Request) {
    try {
        return NextResponse.json({ product: "test" })
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
