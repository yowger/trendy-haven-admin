import Test from "./Test"
import Header from "@/components/dashboard/DashboardHeader"
import Breadcrumbs from "@/components/layout/subHeader/BreadCrumbs"

export default function Products() {
    const breadcrumbItems = [
        { href: "/", label: "Dashboard" },
        { href: "/products", label: "Products" },
    ]

    return (
        <div>
            <Breadcrumbs items={breadcrumbItems} />

            <Header
                title="Products"
                description="Ipsum consectetur commodo nisi aliqua mollit fugiat voluptate Lorem duis."
            />

            <Test />
        </div>
    )
}
