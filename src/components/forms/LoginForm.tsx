"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
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
    const [serverError, setServerError] = useState<null | string>(null)

    const router = useRouter()

    const form = useForm<LoginInput>({
        resolver: zodResolver(loginSchema),
    })

    const isFormSubmitting = form.formState.isSubmitting

    const onSubmit = async (data: LoginInput) => {
        const { email, password } = data

        const result = await signIn("credentials", {
            email,
            password,
            redirect: false,
        })

        const error = result?.error
        const ok = result?.ok

        if (error === "Account not found") {
            const email: string = form.getValues("email")
            const message: string = `${email} does not belong to any registered account.`

            form.control.setError(
                "email",
                {
                    type: "manual",
                    message,
                },
                {
                    shouldFocus: true,
                }
            )
        } else if (error === "Incorrect password") {
            const message: string = `Incorrect password. Please try again.`

            form.control.setError(
                "password",
                {
                    type: "manual",
                    message,
                },
                {
                    shouldFocus: true,
                }
            )
        } else if (error && !ok) {
            setServerError(
                "Oops! Something went wrong on our end. Please try again later."
            )
        } else if (ok) {
            router.push("/store")
        }
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

                {serverError && <FormMessage>{serverError}</FormMessage>}

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
