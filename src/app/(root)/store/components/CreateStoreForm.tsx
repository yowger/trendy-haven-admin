"use client"

import React from "react"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Form,
    FormControl,
    FormDescription,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

export default function CreateStoreForm(): React.JSX.Element {
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

                            <FormItem>
                                <FormLabel>Country</FormLabel>
                                <FormControl>
                                    <Input />
                                </FormControl>
                                <FormMessage />
                            </FormItem>

                            <FormItem>
                                <FormLabel>Address</FormLabel>
                                <FormControl>
                                    <Input />
                                </FormControl>
                                <FormMessage />
                            </FormItem>

                            <FormItem>
                                <FormLabel>Email address</FormLabel>
                                <FormControl>
                                    <Input />
                                </FormControl>
                                <FormMessage />
                            </FormItem>

                            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-4">
                                <FormItem>
                                    <FormLabel>City</FormLabel>
                                    <FormControl>
                                        <Input />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>

                                <FormItem>
                                    <FormLabel>State</FormLabel>
                                    <FormControl>
                                        <Input />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>

                                <FormItem>
                                    <FormLabel>Zip code</FormLabel>
                                    <FormControl>
                                        <Input />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            </div>

                            <FormItem>
                                <FormLabel>Phone number</FormLabel>
                                <FormControl>
                                    <Input />
                                </FormControl>
                                <FormMessage />
                            </FormItem>

                            <Button type="submit">Create store</Button>
                        </form>
                    </Form>
                </form>
            </div>
        </div>
    )
}
