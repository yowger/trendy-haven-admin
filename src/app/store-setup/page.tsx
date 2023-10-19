import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

import { authOptions } from "@/config/nextAuthOptions"

import StoreSetupForm from "./components/StoreSetupForm"

export default async function page(): Promise<JSX.Element> {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect("/login")
    }

    return (
        <div>
            <StoreSetupForm />
        </div>
    )
}
