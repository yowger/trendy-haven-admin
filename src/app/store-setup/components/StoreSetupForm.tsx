"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
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
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

export default function StoreSetupForm(): JSX.Element {
    const router = useRouter()

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
            router.push("/dashboard/store")
        }
    }, [isSuccess, form, router])

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
                            </FormItem>
                        )
                    }}
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
                    className="w-full"
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
