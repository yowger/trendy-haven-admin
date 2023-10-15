import DashboardTitle from "@/components/dashboard/DashboardTitle"
import { Separator } from "@/components/ui/separator"

import DataTable from "./DataTable"

export default function ProductOverviewPage(): JSX.Element {
    return (
        <div className="space-y-6">
            <DashboardTitle
                title="Overview of Your Products"
                description="Make updates or add new products as needed to keep your store inventory up-to-date."
            />
            <Separator />
            <DataTable />
        </div>
    )
}
