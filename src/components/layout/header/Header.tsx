import SidebarSheet from "@/components/layout/sidebar/SidebarSheet"
import StoreSwitcher from "./StoreSwitcher"
import AccountMenu from "./AccountMenu"

export default function Header(): JSX.Element {
    return (
        <div className="h-14 px-4 md:px-5 flex items-center border-b justify-between">
            <div className="flex items-center gap-x-4">
                <div className="block md:hidden">
                    <SidebarSheet />
                </div>
                <StoreSwitcher />
            </div>

            <div className="flex items-center">
                <AccountMenu />
            </div>
        </div>
    )
}
