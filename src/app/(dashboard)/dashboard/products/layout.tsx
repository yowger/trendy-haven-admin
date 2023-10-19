import Navbar from "@/components/dashboard/Navbar"

const sidebarNavItems = [
    {
        title: "Overview",
        href: "/dashboard/products",
    },
    {
        title: "Create Product",
        href: "/dashboard/products/create",
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
