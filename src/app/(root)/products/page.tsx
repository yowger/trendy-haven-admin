import Test from "./components/Test"
import Breadcrumbs from "@/components/layout/subHeader/BreadCrumbs"
import ProductDialog from "./components/ProductDialog"
import DashboardTitle from "@/components/dashboard/DashboardTitle"
import Test2 from "./components/Test2"

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

            <Test2 />
            <Test />
        </>
    )
}
