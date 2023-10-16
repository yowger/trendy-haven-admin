"use client"

import { ChevronsUpDown, Store } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export default function StoreSwitcher(): JSX.Element {
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
                            Shoppee
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
