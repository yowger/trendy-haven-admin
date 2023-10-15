import DashboardTitle from "@/components/dashboard/DashboardTitle"
import { Separator } from "@/components/ui/separator"

export default function Store(): JSX.Element {
    return (
        <>
            <div className="lg:max-w-2xl">
                <DashboardTitle
                    title=" Store Overview"
                    description="View a detailed overview of your store's performance."
                />
            </div>
            <Separator />
        </>
    )
}
