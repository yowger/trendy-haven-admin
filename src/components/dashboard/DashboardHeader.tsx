interface HeaderProps {
    title: string
    description: string
}

export default function DashboardHeader({ title, description }: HeaderProps) {
    return (
        <div className="mb-7">
            <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
            <p className="text-sm text-muted-foreground">{description}</p>
        </div>
    )
}
