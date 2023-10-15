import Navbar from "@/components/dashboard/Navbar"

const sidebarNavItems = [
    {
        title: "Overview",
        href: "/store",
    },
    {
        title: "Create store",
        href: "/store/create",
    },
]

type RootLayoutProps = {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
    return (
        <div className="space-y-6">
            <Navbar items={sidebarNavItems} />
            {children}
        </div>
    )
}
