import Breadcrumbs from "@/components/layout/subHeader/BreadCrumbs"
import DashboardTitle from "@/components/dashboard/DashboardTitle"
import ProductDialog from "./components/ProductDialog"
import Test from "./components/Test"
import type { BreadcrumbItem } from "@/types/breadCrumbTypes"

export default function Products(): JSX.Element {
    const breadcrumbItems: BreadcrumbItem[] = [
        { href: "/", label: "Dashboard" },
        { href: "/products", label: "Products" },
    ]

    return (
        <>
            <Breadcrumbs breadcrumbItems={breadcrumbItems} />

            <DashboardTitle
                title="Products"
                description="Ipsum consectetur commodo nisi."
                rightContent={<ProductDialog />}
            />

            <Test />
        </>
    )
}
