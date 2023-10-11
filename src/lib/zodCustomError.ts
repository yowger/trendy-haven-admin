import { z } from "zod"

type customError = {
    path: string | number
    message: string
}

type ErrorResponse = {
    message: string
    error: customError[]
}

export function zodCustomError(
    error: unknown,
    message = "An error occurred"
): ErrorResponse | null {
    let errorResult: customError[]
    let response = null

    if (error instanceof z.ZodError) {
        error as z.ZodError

        errorResult = error.issues.map((_error) => ({
            path: _error.path[0],
            message: _error.message,
        }))

        response = {
            message,
            error: errorResult,
        }
    }

    return response
}
