"use client"

import {
    Form,
    FormControl,
    FormDescription,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import React from "react"
import { useForm } from "react-hook-form"

export default function Test2() {
    const form = useForm({})
    return (
        <div>
            <div className="flex-1 lg:max-w-2xl">
                <form className="space-y-6">
                    <Form {...form}>
                        <form className="space-y-8">
                            <FormItem>
                                <FormLabel>Store name</FormLabel>
                                <FormControl>
                                    <Input />
                                </FormControl>
                                <FormMessage />
                                <FormDescription>
                                    The store name serves as the unique
                                    identifier for your online business. It will
                                    be prominently displayed on your website,
                                    and other communications
                                </FormDescription>
                            </FormItem>
                        </form>
                    </Form>
                </form>
            </div>
        </div>
    )
}
