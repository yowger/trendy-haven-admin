import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

import Header from "@/components/layout/header/Header"
import Sidebar from "@/components/layout/sidebar/Sidebar"
import { navigationLinks } from "@/data/navigationLinks"
import { authOptions } from "@/config/nextAuthOptions"
import prisma from "@/lib/prismaDb"

import InitializeStore from "./dashboard/store/components/InitializeStore"

interface ActiveStore {
    id: string
    name: string
}

interface RootLayoutProps {
    children: React.ReactNode
}

export default async function RootLayout({
    children,
}: RootLayoutProps): Promise<JSX.Element> {
    const session = await getServerSession(authOptions)

    const { id: userId, activeStore } = session?.user ?? {}

    let currentActiveStore: ActiveStore | null | undefined = activeStore

    if (!activeStore?.name) {
        const result = await prisma.store.findFirst({
            where: {
                userId,
            },
            select: {
                id: true,
                name: true,
            },
        })

        if (!result) {
            redirect("/store-setup")
        }

        const { id, name } = result
        currentActiveStore = { id, name }
    }

    return (
        <>
            <InitializeStore currentActiveStore={currentActiveStore} />
            <div className="h-screen w-screen overflow-hidden flex flex-row">
                <div className="border-r w-1/6 min-w-[256px] hidden md:block">
                    <Sidebar navigationLinks={navigationLinks} />
                </div>
                <div className="flex flex-col flex-1">
                    <Header />
                    <div className="flex-1 px-4 md:px-5 min-h-0 overflow-auto pt-3 pb-10">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}
