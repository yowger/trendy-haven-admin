import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import LoginForm from "@/components/forms/LoginForm"

export const metadata: Metadata = {
    title: "Trendy Haven Admin | Login",
    description:
        "Log in to your Trendy Haven Admin account to access exclusive features, manage your store, and streamline your business operations with ease",
    keywords: [
        "Trendy Haven",
        "user login",
        "sign in",
        "account login",
        "login account",
    ],
    authors: [{ name: "Roger Pantil", url: "https://github.com/yowger" }],
}

export default function Login(): JSX.Element {
    return (
        <div className="">
            <div className="md:hidden">
                <Image
                    src="/examples/authentication-dark.png"
                    width={1280}
                    height={843}
                    alt="Authentication"
                    className="hidden"
                />
            </div>
            <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
                <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex">
                    <div className="absolute inset-0 bg-zinc-900" />
                    <div className="relative z-20 flex items-center text-lg font-medium">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mr-2 h-6 w-6"
                        >
                            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                        </svg>
                        Trendy Haven Admin
                    </div>
                    <div className="relative z-20 mt-auto">
                        <blockquote className="space-y-2">
                            <p className="text-lg">
                                &ldquo;Log in to your Trendy Haven Admin account
                                to access exclusive features, manage your store,
                                and streamline your business operations with
                                ease.&rdquo;
                            </p>
                            <footer className="text-sm">Sofia Davis</footer>
                        </blockquote>
                    </div>
                </div>
                <div className="lg:p-8">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                        <div className="flex flex-col space-y-2 text-center">
                            <h1 className="text-2xl font-semibold tracking-tight">
                                Login
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                Enter your email below to log in to your account
                            </p>
                        </div>
                        <LoginForm />
                        <p className="text-center">
                            {"Don't have an account yet?"}{" "}
                            <Link
                                href="/register"
                                className="text-blue-800 hover:underline"
                            >
                                Create an account
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}