import { DefaultOptions } from "@tanstack/react-query"

interface QueryClientOptions {
    defaultOptions: DefaultOptions
}

const queryClientOptions: QueryClientOptions = {
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
}

export default queryClientOptions
