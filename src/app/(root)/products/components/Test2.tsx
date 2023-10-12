"use client"

import useGetProducts from "@/hooks/api/useGetProduct"

export default function Test2() {
    const { data } = useGetProducts()
    console.log("product: ", data)
    return <div>Test2</div>
}
