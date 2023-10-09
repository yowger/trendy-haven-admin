import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Sidebar from "@/components/layout/sidebar/Sidebar"
import { navigationLinks } from "@/data/navigationLinks"

export default function SidebarSheet() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (pathname) {
            setIsOpen(false)
        }
    }, [pathname])

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Menu className="cursor-pointer p-1" size={28} />
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
                <Sidebar navigationLinks={navigationLinks} />
            </SheetContent>
        </Sheet>
    )
}
