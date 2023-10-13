import { useMutation } from "@tanstack/react-query"
import type { AxiosResponse } from "axios"

import axiosPublic from "@/lib/axios"
import type { UserRegisterInput } from "@/schemas/registerSchema"
import { UserRole } from "@/types/productTypes"

interface RegisterUserResponse {
    user: {
        id: string
        name: string | null
        email: string
        role: UserRole
        image: string | null
        createdAt: Date
        updatedAt: Date
    }
}

const registerUser = async (
    user: UserRegisterInput
): Promise<RegisterUserResponse> => {
    const response: AxiosResponse<RegisterUserResponse> =
        await axiosPublic.post("/api/register", user)

    return response.data
}

const useRegisterUser = () => {
    return useMutation({
        mutationFn: registerUser,
        cacheTime: 0,
    })
}

export default useRegisterUser
