import { useEffect, useState } from "react"
import { Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { ProductSchema } from "@/schemas/productSchema"
import type { Product } from "@/schemas/productSchema"
import { handleDecimalsOnValue } from "@/lib/handlePriceChange"

interface ProductDialogProps {
    isOpen: boolean
    onClose: () => void
}

export default function ProductDialog({ isOpen, onClose }: ProductDialogProps) {
    // const { mutate, isLoading, isSuccess, error } = useRegisterUser()

    const form = useForm<Product>({
        resolver: zodResolver(ProductSchema),
    })

    const onSubmit = async (data: Product) => {
        const { name, price } = data

        // mutate({ name, price })
    }

    const [price, setPrice] = useState("")

    const handlePriceChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setPrice(handleDecimalsOnValue(event.target.value))
    }

    const onOpenChange = (open: boolean) => {
        if (!open) {
            onClose()
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogTrigger>Open</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add New Product</DialogTitle>
                    <DialogDescription>
                        Enter the details below to add a new product to your
                        inventory
                    </DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form className="">
                        <div className="space-y-3.5">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* <FormField
                                control={form.control}
                                name="price"
                                render={({ field }) => ( */}
                            <FormItem>
                                <FormLabel>Price</FormLabel>
                                <FormControl>
                                    <Input
                                        value={price}
                                        onChange={handlePriceChange}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            {/* )} */}
                            {/* /> */}
                        </div>
                    </form>
                    <DialogFooter>
                        <Button
                            onClick={form.handleSubmit(onSubmit)}
                            // disabled={isLoading}
                        >
                            {/* {isLoading && (
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            )} */}
                            Add Product
                        </Button>
                        <Button variant="outline">Cancel</Button>
                    </DialogFooter>
                </Form>
            </DialogContent>
        </Dialog>
    )
}
