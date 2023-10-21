import { useMutation } from "@tanstack/react-query"
import type { User } from "@prisma/client"
import type { AxiosError, AxiosResponse } from "axios"

import axiosPublic from "@/lib/axios"
import type { UserRegisterInput } from "@/schemas/registerSchema"

interface UserRegisterResponse {
    user: Omit<User, "password">
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
