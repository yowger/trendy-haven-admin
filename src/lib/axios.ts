import axios from "axios"
import type { AxiosInstance } from "axios"

const baseUrl: string =
    process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : process.env.NEXT_PUBLIC_API_BASE_URL!

const axiosPublic: AxiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-type": "application/json",
    },
})

export default axiosPublic
