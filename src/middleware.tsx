import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const allowedOrigins: string[] =
    process.env.NODE_ENV === "development"
        ? [
              "http://localhost:3000",
              "http://localhost:3001",
              "http://localhost:3002",
          ]
        : ["https://trendy-haven-admin.vercel.app/"]

export function middleware(
    request: NextRequest
): NextResponse<unknown> | undefined {
    const { pathname } = request.nextUrl

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
