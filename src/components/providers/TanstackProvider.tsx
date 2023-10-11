"use client"

import { useState } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import queryClientOptions from "@/config/QueryClientOptions"

export function TanstackProvider({ children }: { children: React.ReactNode }) {
    const [queryClient] = useState(() => new QueryClient(queryClientOptions))

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            {process.env.NODE_ENV === "development" && (
                <ReactQueryDevtools
                    initialIsOpen={false}
                    position="bottom-right"
                />
            )}
        </QueryClientProvider>
    )
}
