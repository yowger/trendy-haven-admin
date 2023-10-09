"use client"

import { LogOut, Settings, User } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { navigationLinks } from "@/data/navigationLinks"
import { useCurrentPage } from "@/hooks/useCurrentPage"
import SidebarSheet from "@/components/layout/sidebar/SidebarSheet"

export default function Header() {
    const currentPage = useCurrentPage(navigationLinks)

    return (
        <div className="h-14 px-4 md:px-5 flex items-center border-b justify-between">
            <div className="flex items-center">
                <div className="block md:hidden">
                    <SidebarSheet />
                </div>
                {/* <h1 className="text-lg font-medium">{currentPage}</h1> */}
            </div>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Avatar className="w-9 h-9 cursor-pointer hover:brightness-125 duration-300">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                    <DropdownMenuLabel>Roger Pantil</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            <User className="mr-2 h-4 w-4" />
                            <span>Profile</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Settings className="mr-2 h-4 w-4" />
                            <span>Settings</span>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Log out</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
