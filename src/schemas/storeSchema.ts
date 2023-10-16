import { z } from "zod"

export const StoreInputSchema = z.object({
    name: z
        .string()
        .min(1, "Name must be at least 1 character long")
        .max(255, "Name cannot exceed 255 characters"),
    country: z.string().optional(),
    address: z.string().optional(),
    email: z.string().email("Invalid email address").optional(),
    city: z.string().optional(),
    zipCode: z.string().optional(),
    phoneNumber: z.string().optional(),
})

export type StoreInput = z.infer<typeof StoreInputSchema>
