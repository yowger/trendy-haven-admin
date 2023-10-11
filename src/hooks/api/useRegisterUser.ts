import { useMutation } from "@tanstack/react-query"
import axiosPublic from "@/lib/axios"
import type { AxiosError } from "axios"

import type { UserRegister } from "@/schemas/registerSchema"

const registerUser = (user: UserRegister): Promise<any> => {
    return axiosPublic.post("/api/register", user)
}

const useRegisterUser = () => {
    return useMutation<UserRegister, AxiosError, UserRegister>({
        mutationFn: registerUser,
        cacheTime: 0,
    })
}

export default useRegisterUser
