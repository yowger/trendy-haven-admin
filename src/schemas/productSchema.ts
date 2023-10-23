import { z } from "zod"

export const ProductInputSchema = z.object({
    name: z
        .string()
        .min(1, "Name must be at least 1 character long")
        .max(255, "Name cannot exceed 255 characters"),
    category: z.string(),
    stocks: z
        .object({
            sizeId: z.string().min(1, "Size is required"),
            colorId: z.string().min(1, "Color is Required"),
            quantity: z.coerce.number().gte(0),
            price: z.string().min(1, "PRice is required"),
        })
        .array(),
})

export type ProductInput = z.infer<typeof ProductInputSchema>

export const ProductIdsSchema = z.array(z.string())

export type ProductIds = z.infer<typeof ProductIdsSchema>
