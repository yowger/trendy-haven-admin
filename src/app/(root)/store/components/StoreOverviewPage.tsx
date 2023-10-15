import DashboardTitle from "@/components/dashboard/DashboardTitle"
import { Separator } from "@/components/ui/separator"

export default function StoreOverviewPage(): React.JSX.Element {
    return (
        <div className="space-y-6">
            <div className="lg:max-w-2xl">
                <DashboardTitle
                    title=" Store Overview"
                    description="View a detailed overview of your store's performance."
                />
            </div>
            <Separator />
        </div>
    )
}
