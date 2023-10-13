import { useMutation } from "@tanstack/react-query"
import type { AxiosError } from "axios"

import axiosPublic from "@/lib/axios"
import type { UserRegisterInput } from "@/schemas/registerSchema"

const registerUser = (user: UserRegisterInput): Promise<any> => {
    return axiosPublic.post("/api/register", user)
}

const useRegisterUser = () => {
    return useMutation<UserRegisterInput, AxiosError, UserRegisterInput>({
        mutationFn: registerUser,
        cacheTime: 0,
    })
}

export default useRegisterUser
