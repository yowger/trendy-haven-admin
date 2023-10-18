"use client"

import { useEffect, useState } from "react"
import { signIn } from "next-auth/react"
import { Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import useRegisterUser from "@/hooks/api/useRegisterUser"
import { userFormRegisterSchema } from "@/schemas/registerSchema"
import type { UserFormRegister } from "@/schemas/registerSchema"
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

export default function RegisterForm(): JSX.Element {
    const [serverError, setServerError] = useState<null | string>(null)

    const form = useForm<UserFormRegister>({
        resolver: zodResolver(userFormRegisterSchema),
    })

    const { mutate, isLoading, isSuccess, error } = useRegisterUser()

    const onSubmit = async (data: UserFormRegister) => {
        const { email, password } = data

        mutate({ email, password })
    }

    useEffect(() => {
        if (error) {
            const statusResponse: number | undefined = error.response?.status

            if (statusResponse === 409) {
                const email: string = form.getValues("email")
                const message: string = `${email} is already taken`

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
            } else {
                setServerError(
                    "Oops! Something went wrong on our end. Please try again later."
                )
            }
        }
    }, [error, form])

    useEffect(() => {
        if (isSuccess) {
            const [email, password]: [string, string] = form.getValues([
                "email",
                "password",
            ])

            signIn("credentials", {
                email,
                password,
                redirect: true,
                callbackUrl: "/",
            })
        }
    }, [isSuccess, form])

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

                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Confirm Password</FormLabel>
                            <FormControl>
                                <Input type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {serverError && <FormMessage>{serverError}</FormMessage>}

                <Button disabled={isLoading} type="submit" className="w-full">
                    {isLoading && (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Register
                </Button>
            </form>
        </Form>
    )
}
