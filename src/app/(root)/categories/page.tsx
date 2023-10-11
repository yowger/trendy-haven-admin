import Title from "@/components/dashboard/DashboardTitle"
import Breadcrumbs from "@/components/layout/subHeader/BreadCrumbs"

export default function Categories() {
    const breadcrumbItems = [
        { href: "/", label: "Dashboard" },
        { href: "/categories", label: "Categories" },
    ]

    return (
        <div>
            <Breadcrumbs items={breadcrumbItems} />

            <Title
                title="Categories"
                description="Sit ullamco anim ad proident Lorem excepteur nisi aute cillum elit esse ad irure."
            />
        </div>
    )
}
