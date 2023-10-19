"use client"

import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

export default function SignOutButton() {
    const router = useRouter()

    const onLogOut = (): void => {
        signOut({ redirect: false }).then(() => {
            router.push("/login")
        })
    }

    return (
        <p
            onClick={onLogOut}
            className="flex items-center text-sm cursor-pointer hover:underline"
        >
            <ArrowLeft className="w-3.5 h-3.5 mr-1.5" /> Log out
        </p>
    )
}
