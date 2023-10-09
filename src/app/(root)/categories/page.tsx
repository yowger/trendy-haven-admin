import Header from "@/components/dashboard/DashboardHeader"
import Breadcrumbs from "@/components/layout/subHeader/BreadCrumbs"

export default function Categories() {
    const breadcrumbItems = [
        { href: "/", label: "Dashboard" },
        { href: "/categories", label: "Categories" },
    ]

    return (
        <div>
            <Breadcrumbs items={breadcrumbItems} />

            <Header
                title="Categories"
                description="Sit ullamco anim ad proident Lorem excepteur nisi aute cillum elit esse ad irure."
            />
        </div>
    )
}
