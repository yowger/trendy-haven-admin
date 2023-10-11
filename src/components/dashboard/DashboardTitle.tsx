interface DashboardTitleProps {
    title: string
    description: string
    rightContent?: React.ReactNode
}

export default function DashboardTitle({
    title,
    description,
    rightContent,
}: DashboardTitleProps) {
    return (
        <div className="flex justify-between items-center mb-7">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
                <p className="text-sm text-muted-foreground">{description}</p>
            </div>
            {rightContent && <div className="ml-4">{rightContent}</div>}
        </div>
    )
}
