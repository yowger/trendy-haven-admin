interface NavigationLink {
    href: string
    label: string
}

export const navigationLinks: NavigationLink[] = [
    { href: "/", label: "Dashboard" },
    { href: "/categories", label: "Categories" },
    { href: "/products", label: "Products" },
    { href: "/sizes", label: "Sizes" },
    { href: "/colors", label: "Colors" },
    { href: "/orders", label: "Orders" },
    { href: "/settings", label: "Settings" },
]
