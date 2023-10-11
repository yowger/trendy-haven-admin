"use client"

import { useEffect } from "react"
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

export default function RegisterForm() {
    const form = useForm<UserFormRegister>({
        resolver: zodResolver(userFormRegisterSchema),
    })

    const { mutate, isLoading, isSuccess, error } = useRegisterUser()

    const onSubmit = async (data: UserFormRegister) => {
        const { name, email, password } = data

        mutate({ name, email, password })
    }

    useEffect(() => {
        if (error) {
            const statusResponse = error.response?.status

            if (statusResponse === 409) {
                const email = form.getValues("email")
                const message = `${email} is already taken`

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
            }
        }
    }, [error, form])

    useEffect(() => {
        if (isSuccess) {
            const [email, password] = form.getValues(["email", "password"])

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
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-3.5"
            >
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
