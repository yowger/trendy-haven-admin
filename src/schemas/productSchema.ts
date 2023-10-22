import { z } from "zod"

export const ProductInputSchema = z.object({
    name: z
        .string()
        .min(1, "Name must be at least 1 character long")
        .max(255, "Name cannot exceed 255 characters"),
    category: z.string(),
    stocks: z
        .object({
            size: z.string(),
            color: z.string(),
            quantity: z.coerce.number().gte(0),
            price: z.coerce.number().gte(0),
        })
        .array(),
})

export type ProductInput = z.infer<typeof ProductInputSchema>

export const ProductIdsSchema = z.array(z.string())

export type ProductIds = z.infer<typeof ProductIdsSchema>
