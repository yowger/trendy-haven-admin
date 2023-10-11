import Test from "./Test"
import Breadcrumbs from "@/components/layout/subHeader/BreadCrumbs"
import ProductDialog from "./components/ProductDialog"
import ProductHeader from "./components/ProductHeader"

export default function Products() {
    const breadcrumbItems = [
        { href: "/", label: "Dashboard" },
        { href: "/products", label: "Products" },
    ]

    return (
        <>
            <Breadcrumbs items={breadcrumbItems} />

            <ProductHeader />

            <Test />
        </>
    )
}
