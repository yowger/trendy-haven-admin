import { useQuery } from "@tanstack/react-query"
import type { Color } from "@prisma/client"
import type { AxiosError, AxiosResponse } from "axios"

import axiosPublic from "@/lib/axios"
import { SIZE_QUERY_KEY } from "@/constants/queryKeys"

interface colorsResponse {
    colors: Omit<Color, "productIds">[]
}

export const getColors = async (): Promise<colorsResponse> => {
    const response: AxiosResponse<colorsResponse> = await axiosPublic.get(
        `api/size`
    )

    return response.data
}

const useGetColors = () => {
    return useQuery<colorsResponse, AxiosError>({
        queryKey: [SIZE_QUERY_KEY],
        queryFn: () => getColors(),
    })
}

export default useGetColors
