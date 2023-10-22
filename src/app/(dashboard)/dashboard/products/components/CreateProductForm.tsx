"use client"

import { useEffect } from "react"
import { Loader2, Trash } from "lucide-react"
import {
    Control,
    Controller,
    FieldErrors,
    FieldPath,
    useFieldArray,
    useForm,
} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import useCreateProduct from "@/hooks/api/useCreateProduct"
import useGetCategories from "@/hooks/api/useGetCategories"
import useGetSizes from "@/hooks/api/useGetSizes"
import useGetColors from "@/hooks/api/useGetColors"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { ProductInputSchema } from "@/schemas/productSchema"
import type { ProductInput } from "@/schemas/productSchema"
import { handleDecimalsOnValue } from "@/lib/handlePriceChange"
import { useToast } from "@/components/ui/use-toast"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

export default function CreateProductForm(): JSX.Element {
    const { toast } = useToast()

    const {
        isLoading: categoriesLoading,
        isError: categoriesError,
        error: categoriesErrorMessage,
        data: categoriesData,
        isFetching: categoriesIsFetching,
        isPreviousData: categoriesIsPreviousData,
    } = useGetCategories()

    const {
        isLoading: sizesLoading,
        isError: sizesError,
        error: sizesErrorMessage,
        data: sizesData,
        isFetching: sizesIsFetching,
        isPreviousData: sizesIsPreviousData,
    } = useGetSizes()

    const {
        isLoading: colorsLoading,
        isError: colorsError,
        error: colorsErrorMessage,
        data: colorsData,
        isFetching: colorsIsFetching,
        isPreviousData: colorsIsPreviousData,
    } = useGetColors()

    const { data, mutate, isLoading, isSuccess, error } = useCreateProduct()

    const form = useForm<ProductInput>({
        resolver: zodResolver(ProductInputSchema),
        defaultValues: {
            stocks: [{ size: "", color: "", quantity: 0, price: 0 }],
        },
    })

    const onSubmit = (data: ProductInput): void => {
        // const { name, price, category } = data
        // form.reset({
        //     name: "",
        //     price: 0,
        //     quantity: 0,
        // })
        console.log("form data: ", data)

        // mutate({ name, price })
    }

    useEffect(() => {
        if (error) {
            // const statusResponse = error.response?.status
            console.log("errors: ", error)
        }
    }, [error, form])

    useEffect(() => {
        if (isSuccess) {
            form.reset({})

            toast({
                duration: 2000,
                description: "Product added successfully!",
            })
        }
    }, [isSuccess, form, toast])

    const {
        fields: variantFields,
        append,
        remove,
    } = useFieldArray({
        control: form.control,
        name: "stocks",
    })

    const onVariantAppend = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        append({ size: "", color: "", quantity: 0, price: 0 })
    }

    return (
        <Form {...form}>
            <form className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel>Product name</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )
                    }}
                />

                <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                        <FormItem className="">
                            <FormLabel>Category</FormLabel>
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger
                                        className={cn("w-full md:w-72")}
                                    >
                                        <SelectValue placeholder="Select category" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {categoriesData?.categories?.map(
                                        (category) => {
                                            return (
                                                <SelectItem
                                                    key={category.id}
                                                    value={category.id}
                                                >
                                                    <span className="capitalize">
                                                        {category.name}
                                                    </span>
                                                </SelectItem>
                                            )
                                        }
                                    )}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="flex justify-between">
                    <p>Variants</p>
                    <Button
                        onClick={(event) => onVariantAppend(event)}
                        variant="outline"
                    >
                        Add Variant
                    </Button>
                </div>

                {variantFields.map((field, index) => {
                    return (
                        <div key={field.id} className="md:flex gap-x-4 space-y-8">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8">
                                <FormField
                                    name={`stocks.${index}.size`}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Size</FormLabel>
                                            <Select
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                            >
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Size" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {sizesData?.sizes?.map(
                                                        (size) => {
                                                            return (
                                                                <SelectItem
                                                                    key={
                                                                        size.id
                                                                    }
                                                                    value={
                                                                        size.id
                                                                    }
                                                                >
                                                                    <span className="uppercase">
                                                                        {
                                                                            size.name
                                                                        }
                                                                    </span>
                                                                </SelectItem>
                                                            )
                                                        }
                                                    )}
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    name={`stocks.${index}.color`}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Color</FormLabel>
                                            <Select
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                            >
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Color" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {colorsData?.colors?.map(
                                                        (color) => {
                                                            return (
                                                                <SelectItem
                                                                    key={
                                                                        color.id
                                                                    }
                                                                    value={
                                                                        color.id
                                                                    }
                                                                >
                                                                    <span className="capitalize">
                                                                        {
                                                                            color.name
                                                                        }
                                                                    </span>
                                                                </SelectItem>
                                                            )
                                                        }
                                                    )}
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <ControllerPlus
                                    transform={{
                                        input: (value) => String(value),
                                        output: (event) => {
                                            return event.target.value.replace(
                                                /[^0-9]/g,
                                                ""
                                            )
                                        },
                                    }}
                                    control={form.control}
                                    name={`stocks.${index}.quantity`}
                                    label="Quantity"
                                    defaultValue=""
                                    errors={form.formState.errors}
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
                                    name={`stocks.${index}.price`}
                                    label="Price"
                                    defaultValue=""
                                    errors={form.formState.errors}
                                />
                            </div>

                            <div className="self-end">
                                <Button
                                    size="icon"
                                    className="justify-self-end"
                                >
                                    <Trash className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    )
                })}

                {error && (
                    <FormMessage>
                        {`Oops! Something went wrong on our end. Please try again
                        later.`}
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
    label,
}: {
    transform: {
        input: (value: TOutput) => TInput
        output: (value: React.ChangeEvent<HTMLInputElement>) => TOutput
    }
    name: FieldPath<ProductInput>
    control: Control<ProductInput>
    defaultValue?: any
    errors: FieldErrors
    label?: React.ReactNode
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
                        {label && <FormLabel>{label}</FormLabel>}
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
