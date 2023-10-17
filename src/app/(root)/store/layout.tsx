import StoreNavbar from "./components/StoreNavbar"

type RootLayoutProps = {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
    return (
        <div className="space-y-6">
            <StoreNavbar />
            {children}
        </div>
    )
}
