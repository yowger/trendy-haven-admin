"use client"

import { ChevronsUpDown, Store } from "lucide-react"

import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export default function StoreSwitcher(): JSX.Element | null {
    const { data: session } = useSession()
    const { id: userId, activeStore } = session?.user ?? {}

    if (!activeStore?.name) {
        return null
    }

    return (
        <div>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        size="sm"
                        className="max-w-[208px] overflow-hidden"
                    >
                        <Store className="mr-2.5 h-4 w-4 shrink-0" />
                        <span className="whitespace-nowrap truncate">
                            {activeStore.name}
                        </span>
                        <ChevronsUpDown className="ml-4 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent>
                    Place content for the popover here.
                </PopoverContent>
            </Popover>
        </div>
    )
}
