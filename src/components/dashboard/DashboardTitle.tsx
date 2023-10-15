interface DashboardTitleProps {
    title: string
    description: string
}

export default function DashboardTitle({
    title,
    description,
}: DashboardTitleProps): JSX.Element {
    return (
        <div className="flex-1 lg:max-w-2xl">
            <h3 className="text-lg font-medium">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
        </div>
    )
}
