"use client"

import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"

import useCreateStore from "@/hooks/api/useCreateStore"
import { StoreInputSchema } from "@/schemas/storeSchema"
import type { StoreInput } from "@/schemas/storeSchema"
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

export default function CreateStoreForm(): JSX.Element {
    const { data, mutate, isLoading, isSuccess, error } = useCreateStore()

    const form = useForm<StoreInput>({
        resolver: zodResolver(StoreInputSchema),
    })

    const onSubmit = (data: StoreInput): void => {
        mutate({ ...data })
    }

    useEffect(() => {
        if (error) {
            // const statusResponse = error.response?.status
            console.log("errors: ", error)
        }
    }, [error, form])

    useEffect(() => {
        if (isSuccess) {
            console.log("store added")
        }
    }, [isSuccess, form])

    return (
        <Form {...form}>
            <form className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel>Store name</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                                <FormDescription>
                                    The store name serves as the unique
                                    identifier for your online business. It will
                                    be prominently displayed on your website,
                                    and other communications
                                </FormDescription>
                            </FormItem>
                        )
                    }}
                />

                <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel>Country</FormLabel>
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
                    name="address"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel>Address</FormLabel>
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
                    name="email"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel>Email address</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )
                    }}
                />

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-4">
                    <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel>City</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )
                        }}
                    />

                    <FormItem>
                        <FormLabel>State</FormLabel>
                        <FormControl>
                            <Input />
                        </FormControl>
                        <FormMessage />
                    </FormItem>

                    <FormField
                        control={form.control}
                        name="zipCode"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel>Zip code</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )
                        }}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel>Phone number</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )
                    }}
                />

                {error && (
                    <FormMessage>
                        Failed to create store, please check your internet
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
                    Create store
                </Button>
            </form>
        </Form>
    )
}
