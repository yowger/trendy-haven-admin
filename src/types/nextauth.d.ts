import NextAuth from "next-auth"
import { JWT } from "next-auth/jwt"
import { Role } from "@prisma/client"

interface User {
    id: string
    name?: string | null
    email: string
    picture?: string | null
    role: Role
    storeId?: string | null
}

declare module "next-auth" {
    interface Session {
        user: User
    }
}
