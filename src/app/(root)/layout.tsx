import Header from "@/components/layout/header/Header"
import Sidebar from "@/components/layout/sidebar/Sidebar"
import SubHeader from "@/components/layout/subHeader/SubHeader"
import { navigationLinks } from "@/data/navigationLinks"

type RootLayoutProps = {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <div className="h-screen w-screen overflow-hidden flex flex-row">
            <Sidebar navigationLinks={navigationLinks} />
            <div className="flex flex-col flex-1">
                <Header />
                <SubHeader />
                <div className="flex-1 px-5 min-h-0 overflow-auto pb-10">
                    {children}
                </div>
            </div>
        </div>
    )
}
