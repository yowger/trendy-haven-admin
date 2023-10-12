import Test from "./Test"
import Breadcrumbs from "@/components/layout/subHeader/BreadCrumbs"
import ProductDialog from "./components/ProductDialog"
import DashboardTitle from "@/components/dashboard/DashboardTitle"

export default function Products() {
    const breadcrumbItems = [
        { href: "/", label: "Dashboard" },
        { href: "/products", label: "Products" },
    ]

    return (
        <>
            <Breadcrumbs items={breadcrumbItems} />

            <DashboardTitle
                title="Products"
                description="Ipsum consectetur commodo nisi."
                rightContent={<ProductDialog />}
            />

            <Test />
        </>
    )
}
