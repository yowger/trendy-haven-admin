import DashboardTitle from "@/components/dashboard/DashboardTitle"
import { Separator } from "@/components/ui/separator"

import CreateStoreForm from "./CreateStoreForm"

export default function CreateStorePage(): React.JSX.Element {
    return (
        <div className="space-y-6">
            <div className="lg:max-w-2xl">
                <DashboardTitle
                    title="Create Your Store"
                    description="Set up your online store in minutes. Customize your store name, add a logo, and define product categories. Start selling globally with your unique online storefront."
                />
            </div>
            <Separator />
            <CreateStoreForm />
        </div>
    )
}
