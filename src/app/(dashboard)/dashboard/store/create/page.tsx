import DashboardTitle from "@/components/dashboard/DashboardTitle"
import { Separator } from "@/components/ui/separator"

import CreateStoreForm from "../components/CreateStoreForm"

export default function page(): React.JSX.Element {
    return (
        <>
            <DashboardTitle
                title="Create Your Store"
                description="Set up your online store to access all its features. Customize your store name, add a logo, and define product categories. Start selling globally with your unique online storefront."
            />
            <Separator />
            <div className="lg:max-w-2xl">
                <CreateStoreForm />
            </div>
        </>
    )
}
