import { z } from "zod"

export const userRegisterSchema = z.object({
    name: z
        .string()
        .min(1, "Name is required")
        .max(100, "Name cannot exceed 100 characters")
        .optional(),
    email: z.string().min(1, "Email is required").email("Invalid email"),
    password: z
        .string()
        .min(5, "Password must be at least 5 characters long")
        .max(50, "Password cannot exceed 50 characters")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter"),
})

export const userFormRegisterSchema = userRegisterSchema
    .extend({
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ["confirmPassword"],
        message: "Passwords do not match",
    })

export type UserFormRegister = z.infer<typeof userFormRegisterSchema>
export type UserRegisterInput = z.infer<typeof userRegisterSchema>
