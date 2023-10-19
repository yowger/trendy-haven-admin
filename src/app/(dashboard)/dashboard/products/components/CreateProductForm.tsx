"use client"

import { useEffect } from "react"
import { Loader2 } from "lucide-react"
import {
    Control,
    Controller,
    FieldErrors,
    FieldPath,
    useForm,
} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import useCreateProduct from "@/hooks/api/useCreateProduct"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { ProductInputSchema } from "@/schemas/productSchema"
import type { ProductInput } from "@/schemas/productSchema"
import { handleDecimalsOnValue } from "@/lib/handlePriceChange"
import { useToast } from "@/components/ui/use-toast"

export default function CreateProductForm(): JSX.Element {
    const { toast } = useToast()

    const { data, mutate, isLoading, isSuccess, error } = useCreateProduct()

    const form = useForm<ProductInput>({
        resolver: zodResolver(ProductInputSchema),
    })

    const onSubmit = (data: ProductInput): void => {
        const { name, price } = data

        mutate({ name, price })
    }

    useEffect(() => {
        if (error) {
            // const statusResponse = error.response?.status
            console.log("errors: ", error)
        }
    }, [error, form])

    useEffect(() => {
        if (isSuccess) {
            form.reset({
                name: "",
                price: "",
            })

            toast({
                duration: 2000,
                description: "Product added successfully!",
            })
        }
    }, [isSuccess, form, toast])

    return (
        <Form {...form}>
            <form className="space-y-8">
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
                            return handleDecimalsOnValue(event.target.value)
                        },
                    }}
                    control={form.control}
                    name="price"
                    defaultValue=""
                    errors={form.formState.errors}
                />

                {error && (
                    <FormMessage>
                        Failed to add product, please check your internet
                        connection and try again
                    </FormMessage>
                )}

                <Button
                    onClick={form.handleSubmit(onSubmit)}
                    disabled={isLoading}
                >
                    {isLoading && (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Add Product
                </Button>
            </form>
        </Form>
    )
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
    name: FieldPath<ProductInput>
    control: Control<ProductInput>
    defaultValue?: any
    errors: FieldErrors
}): JSX.Element => {
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
