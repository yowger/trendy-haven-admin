import { z } from "zod"

export const ProductSchema = z.object({
    name: z
        .string()
        .min(1, "Name must be at least 1 character long")
        .max(255, "Name cannot exceed 255 characters"),
    price: z.string().min(1, "Required"),
})

export type Product = z.infer<typeof ProductSchema>
