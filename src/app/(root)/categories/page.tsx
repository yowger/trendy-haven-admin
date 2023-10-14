import Title from "@/components/dashboard/DashboardTitle"
import Breadcrumbs from "@/components/layout/subHeader/BreadCrumbs"
import type { BreadcrumbItem } from "@/types/breadCrumbTypes"

export default function Categories(): JSX.Element {
    const breadcrumbItems: BreadcrumbItem[] = [
        { href: "/", label: "Dashboard" },
        { href: "/categories", label: "Categories" },
    ]

    return (
        <div>
            <Breadcrumbs breadcrumbItems={breadcrumbItems} />

            <Title
                title="Categories"
                description="Sit ullamco anim ad proident Lorem excepteur nisi aute cillum elit esse ad irure."
            />
        </div>
    )
}
