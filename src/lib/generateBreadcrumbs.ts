interface NavigationLink {
    href: string
    label: string
}

export default function generateBreadcrumbs(
    pathname: string,
    navigationLinks: NavigationLink[]
) {
    const dashboardPage = { href: "/", label: "Dashboard" }
    const currentPage = navigationLinks.find((link) => link.href === pathname)

    const breadcrumbItems = []
    breadcrumbItems.push(dashboardPage)

    if (currentPage && pathname != "/") {
        breadcrumbItems.push(currentPage)
    }

    return breadcrumbItems
}
