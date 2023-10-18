import axios from "axios"
import type { AxiosInstance } from "axios"

import { baseUrl } from "@/config/baseUrl"

const axiosPublic: AxiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-type": "application/json",
    },
})

export default axiosPublic
