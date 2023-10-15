import { Separator } from "@/components/ui/separator"
import DashboardTitle from "@/components/dashboard/DashboardTitle"

import CreateProductForm from "./CreateProductForm"

export default function CreateProductPage(): JSX.Element {
    return (
        <div className="space-y-6">
            <DashboardTitle
                title="Create a New Product"
                description=" Enter the details of your new product below."
            />
            <Separator />
            <div className="lg:max-w-2xl">
                <CreateProductForm />
            </div>
        </div>
    )
}
