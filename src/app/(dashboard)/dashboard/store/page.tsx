import { DollarSign, MessageSquare, TrendingUp, Users } from "lucide-react"

import DashboardTitle from "@/components/dashboard/DashboardTitle"
import { Separator } from "@/components/ui/separator"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

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

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Total Revenue
                        </CardTitle>
                        <TrendingUp className="w-4 h-4 shrink-0 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$45,231.89</div>
                        <p className="text-xs text-muted-foreground">
                            +$10,500 from last month
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Total Sales
                        </CardTitle>
                        <DollarSign className="w-4 h-4 shrink-0 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">12,234</div>
                        <p className="text-xs text-muted-foreground">
                            +300 from last month
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Total Products
                        </CardTitle>
                        <Users className="w-4 h-4 shrink-0 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">2350</div>
                        <p className="text-xs text-muted-foreground">
                            +250 from last month
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Product Reviews
                        </CardTitle>
                        <MessageSquare className="w-4 h-4 shrink-0 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">2500</div>
                        <p className="text-xs text-muted-foreground">
                            +201 since last week
                        </p>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Share your store</CardTitle>
                    <CardDescription>
                        Copy this link and share it with your friends to
                        showcase your amazing store to the world.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex space-x-2">
                        <Input value="http://test.com/store/test" readOnly />
                        <Button variant="secondary" className="shrink-0">
                            Copy Link
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}
