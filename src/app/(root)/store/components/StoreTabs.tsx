"use client"

import dynamic from "next/dynamic"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const LazyCreateStorePage = dynamic(() => import("./CreateStorePage"))
const LazyStoreOverviewPage = dynamic(() => import("./StoreOverviewPage"))

export default function StoreTabs() {
    return (
        <div>
            <Tabs defaultValue="store-overview">
                <TabsList className="-mx-3">
                    <TabsTrigger value="store-overview">Overview</TabsTrigger>
                    <TabsTrigger value="new-store">Create store</TabsTrigger>
                </TabsList>
                <TabsContent value="store-overview">
                    <LazyStoreOverviewPage />
                </TabsContent>
                <TabsContent value="new-store">
                    <LazyCreateStorePage />
                </TabsContent>
            </Tabs>
        </div>
    )
}
