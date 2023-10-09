import Header from "@/components/layout/header/Header"
import Sidebar from "@/components/layout/sidebar/Sidebar"

type RootLayoutProps = {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <div className="h-screen w-screen overflow-hidden flex flex-row">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <Header />

                <div className="flex-1 p-4 min-h-0 overflow-auto">
                    {/* <Outlet /> */}
                    main Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Alias ab error sunt odio nam voluptate soluta facere
                    laudantium maiores, placeat dolorem cum eaque exercitationem
                    nobis obcaecati praesentium impedit corporis porro?
                </div>
            </div>
        </div>
    )
}
