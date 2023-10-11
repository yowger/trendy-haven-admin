"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import DashboardTitle from "@/components/dashboard/DashboardTitle"
import ProductDialog from "./ProductDialog"

export default function ProductHeader() {
    const [isOpen, setIsOpen] = useState(false)

    const openDialog = () => {
        setIsOpen(true)
    }

    const onCloseDialog = () => {
        setIsOpen(false)
    }

    return (
        <>
            <DashboardTitle
                title="Products"
                description="Ipsum consectetur commodo nisi."
                rightContent={<Button onClick={openDialog}>Add Product</Button>}
            />
            <ProductDialog isOpen={isOpen} onClose={onCloseDialog} />
        </>
    )
}
