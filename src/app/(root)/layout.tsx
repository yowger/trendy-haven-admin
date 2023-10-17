import { headers } from "next/headers"

import Header from "@/components/layout/header/Header"
import Sidebar from "@/components/layout/sidebar/Sidebar"

import { navigationLinks } from "@/data/navigationLinks"

interface RootLayoutProps {
    children: React.ReactNode
}

async function fetchStores() {
    const result = await fetch("http://localhost:3000/api/store", {
        method: "GET",
        headers: headers(),
        next: {
            tags: ["apiStore"],
        },
    })

    if (!result.ok) {
        console.log("failed to fetch stores: ", result)
    }

    return await result.json()
}

export default async function RootLayout({
    children,
}: RootLayoutProps): Promise<JSX.Element> {
    const stores = await fetchStores()

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
