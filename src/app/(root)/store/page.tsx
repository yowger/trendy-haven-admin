import dynamic from "next/dynamic"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const LazyCreateStoreForm = dynamic(
    () => import("./components/CreateStoreForm")
)
const LazyStoreOverview = dynamic(() => import("./components/StoreOverview"))

export default function Store(): JSX.Element {
    return (
        <div>
            Store
            <div className="lg:max-w-2xl">
                <Tabs defaultValue="store-overview">
                    <TabsList className="-mx-3">
                        <TabsTrigger value="store-overview">
                            Overview
                        </TabsTrigger>
                        <TabsTrigger value="new-store">New store</TabsTrigger>
                    </TabsList>
                    <TabsContent value="store-overview">
                        <LazyStoreOverview />
                    </TabsContent>
                    <TabsContent value="new-store">
                        <LazyCreateStoreForm />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}
