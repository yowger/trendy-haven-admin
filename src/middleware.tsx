import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

import { allowedOrigins } from "@/config/allowedOrigins"
// import { getToken } from "next-auth/jwt"

// const allowedPathsRegex =
//     /^(\/(?!api|_next\/static|_next\/image|favicon\.ico|register|login).*)$/

export default async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    if (pathname === "/") {
        return NextResponse.redirect(new URL("/store", request.url))
    }

    // if (allowedPathsRegex.test(pathname)) {
    //     const token = await getToken({
    //         req: request,
    //         secret: process.env.NEXTAUTH_SECRET,
    //     })
    //     if (!token) {
    //         return NextResponse.redirect(new URL("/login", request.url))
    //     }
    //
    // }

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
