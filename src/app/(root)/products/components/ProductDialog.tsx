import { useEffect, useState } from "react"
import { Loader2 } from "lucide-react"
import {
    Control,
    Controller,
    FieldErrors,
    FieldPath,
    useForm,
} from "react-hook-form"
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

const ControllerPlus = <TInput extends string, TOutput>({
    control,
    transform,
    name,
    defaultValue,
    errors,
}: {
    transform: {
        input: (value: TOutput) => TInput
        output: (value: React.ChangeEvent<HTMLInputElement>) => TOutput
    }
    name: FieldPath<Product>
    control: Control<Product>
    defaultValue?: any
    errors: FieldErrors
}) => {
    return (
        <Controller
            defaultValue={defaultValue}
            control={control}
            name={name}
            render={({ field }) => {
                const error = errors[name]
                return (
                    <FormItem>
                        <FormLabel>Price</FormLabel>
                        <FormControl>
                            <Input
                                {...field}
                                onChange={(e) =>
                                    field.onChange(transform.output(e))
                                }
                                // @ts-ignore
                                value={transform.input(field.value)}
                            />
                        </FormControl>
                        {error && error.message && (
                            <FormMessage>{error.message + ""}</FormMessage>
                        )}
                        <FormMessage />
                    </FormItem>
                )
            }}
        />
    )
}

export default function ProductDialog({ isOpen, onClose }: ProductDialogProps) {
    // const { mutate, isLoading, isSuccess, error } = useRegisterUser()

    const form = useForm<Product>({
        resolver: zodResolver(ProductSchema),
    })

    const onSubmit = async (data: Product) => {
        const { name, price } = data
        console.log("submited: ", data)
        // mutate({ name, price })
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
                                render={({ field }) => {
                                    return (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )
                                }}
                            />

                            <ControllerPlus
                                transform={{
                                    input: (value) => String(value),
                                    output: (event) => {
                                        return handleDecimalsOnValue(
                                            event.target.value
                                        )
                                    },
                                }}
                                control={form.control}
                                name="price"
                                defaultValue=""
                                errors={form.formState.errors}
                            />
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
