import Header from "@/components/layout/header/Header"
import Sidebar from "@/components/layout/sidebar/Sidebar"

import { navigationLinks } from "@/data/navigationLinks"

type RootLayoutProps = {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
    return (
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
    )
}
