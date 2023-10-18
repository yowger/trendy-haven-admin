import { getServerSession } from "next-auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

import Header from "@/components/layout/header/Header"
import Sidebar from "@/components/layout/sidebar/Sidebar"

import { navigationLinks } from "@/data/navigationLinks"
import { authOptions } from "@/config/nextAuthOptions"
import type { Store } from "@/types/storeTypes"

interface RootLayoutProps {
    children: React.ReactNode
}

interface fetchStoresProps {
    stores: Store[]
}

async function fetchStores(): Promise<fetchStoresProps> {
    const response = await fetch("http://localhost:3000/api/store", {
        method: "GET",
        headers: headers(),
        next: {
            tags: ["apiStore"],
        },
    })

    if (!response.ok) {
        console.log("failed to fetch stores: ", response)
    }

    const data: fetchStoresProps = await response.json()

    return data
}

export default async function RootLayout({
    children,
}: RootLayoutProps): Promise<JSX.Element> {
    const session = await getServerSession(authOptions)
    const { storeId } = session?.user ?? {}

    let stores: Store[] = []

    if (!storeId) {
        const result = await fetchStores()
        stores = result.stores

        if (stores.length === 0) {
            redirect("/store-setup")
        }
    }

    return (
        <div className="h-screen w-screen overflow-hidden flex flex-row">
            <div className="border-r w-1/6 min-w-[256px] hidden md:block">
                <Sidebar navigationLinks={navigationLinks} />
            </div>
            <div className="flex flex-col flex-1">
                <Header stores={stores} />
                <div className="flex-1 px-4 md:px-5 min-h-0 overflow-auto pt-3 pb-10">
                    {children}
                </div>
            </div>
        </div>
    )
}
