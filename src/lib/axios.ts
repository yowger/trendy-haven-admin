import axios from "axios"

const baseUrl =
    process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : process.env.NEXT_PUBLIC_API_BASE_URL

const axiosPublic = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-type": "application/json",
    },
})

export default axiosPublic
