import { Menu } from "lucide-react"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Sidebar from "@/components/layout/sidebar/Sidebar"
import { navigationLinks } from "@/data/navigationLinks"

export default function SidebarSheet() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Menu className="cursor-pointer p-1" size={28} />
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
                <Sidebar navigationLinks={navigationLinks} />
            </SheetContent>
        </Sheet>
    )
}
