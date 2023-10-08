import Sidebar from "@/components/sidebar/Sidebar"

type RootLayoutProps = {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <div className="bg-neutral-500 h-screen w-screen overflow-hidden flex flex-row">
            <Sidebar />
            <div className="flex flex-col flex-1">
                {/* <Header /> */}
                <p>header</p>
                <div className="flex-1 p-4 min-h-0 overflow-auto">
                    {/* <Outlet /> */}
                    
                </div>
            </div>
        </div>
    )
}
