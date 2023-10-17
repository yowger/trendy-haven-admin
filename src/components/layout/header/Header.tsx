import type { Store } from "@/types/storeTypes"

import AccountMenu from "./AccountMenu"
import HeaderLeftActions from "./HeaderLeftActions"

interface HeaderProps {
    stores: Store[]
}

export default function Header({ stores }: HeaderProps): JSX.Element {
    return (
        <div className="h-14 px-4 md:px-5 flex items-center border-b justify-between">
            <div className="flex items-center gap-x-4">
                <HeaderLeftActions />
            </div>

            <div className="flex items-center">
                <AccountMenu />
            </div>
        </div>
    )
}
