export const api_url: string = process.env.NEXT_PUBLIC_API_BASE_URL!

export const baseUrl: string =
    process.env.NODE_ENV === "development" ? "http://localhost:3000" : api_url
