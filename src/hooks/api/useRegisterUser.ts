import { useMutation } from "@tanstack/react-query"
import type { AxiosError, AxiosResponse } from "axios"

import axiosPublic from "@/lib/axios"
import type { UserRegisterInput } from "@/schemas/registerSchema"
import type { UserRole } from "@/types/productTypes"

interface UserRegisterResponse {
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
): Promise<UserRegisterResponse> => {
    const response: AxiosResponse<UserRegisterResponse> =
        await axiosPublic.post("/api/register", user)

    return response.data
}

const useRegisterUser = () => {
    return useMutation<UserRegisterResponse, AxiosError, UserRegisterInput>({
        mutationFn: registerUser,
        cacheTime: 0,
    })
}

export default useRegisterUser
