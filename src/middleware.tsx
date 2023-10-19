import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"

import { allowedOrigins } from "@/config/allowedOrigins"

export default async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    if (pathname.startsWith("/dashboard") || pathname === "/store-setup") {
        const token = await getToken({
            req: request,
            secret: process.env.NEXTAUTH_SECRET,
        })

        if (!token) {
            return NextResponse.redirect(new URL("/login", request.url))
        }
    }

    if (pathname === "/register" || pathname === "/login") {
        const token = await getToken({
            req: request,
            secret: process.env.NEXTAUTH_SECRET,
        })

        if (token) {
            return NextResponse.redirect(
                new URL("/dashboard/store", request.url)
            )
        }
    }

    if (pathname === "/" || pathname === "/dashboard") {
        return NextResponse.redirect(new URL("/dashboard/store", request.url))
    }

    if (pathname.startsWith("/api")) {
        const origin = request.headers.get("origin")
        if (origin && !allowedOrigins.includes(origin)) {
            return new NextResponse(null, {
                status: 400,
                statusText: "Bad Request",
                headers: {
                    "Content-Type": "text/plain",
                },
            })
        }

        return NextResponse.next()
    }
}
