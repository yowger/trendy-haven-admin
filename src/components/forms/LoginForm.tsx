"use client"

import { useEffect } from "react"
import { signIn } from "next-auth/react"
import { Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { loginSchema } from "@/schemas/loginSchema"
import type { LoginInput } from "@/schemas/loginSchema"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

export default function LoginForm(): JSX.Element {
    const form = useForm<LoginInput>({
        resolver: zodResolver(loginSchema),
    })

    const isFormSubmitting = form.formState.isSubmitting

    const onSubmit = async (data: LoginInput) => {
        const { email, password } = data

        signIn("credentials", {
            email,
            password,
            redirect: true,
            callbackUrl: "/",
        })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button
                    disabled={isFormSubmitting}
                    type="submit"
                    className="w-full"
                >
                    {isFormSubmitting && (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Login
                </Button>
            </form>
        </Form>
    )
}
