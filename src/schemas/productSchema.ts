import { z } from "zod"

export const ProductSchema = z.object({
    name: z
        .string()
        .min(1, "Name must be at least 1 character long")
        .max(255, "Name cannot exceed 255 characters"),
    price: z.number().nonnegative("Price must be a non-negative number"),
})

export type Product = z.infer<typeof ProductSchema>
