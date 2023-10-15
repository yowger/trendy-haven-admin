import DashboardTitle from "@/components/dashboard/DashboardTitle"
import { Separator } from "@/components/ui/separator"

import CreateProductForm from "../components/CreateProductForm"

export default function page() {
    return (
        <>
            <DashboardTitle
                title="Create a New Product"
                description=" Enter the details of your new product below."
            />
            <Separator />
            <div className="lg:max-w-2xl">
                <CreateProductForm />
            </div>
        </>
    )
}
