export enum UserRole {
    ADMIN = "ADMIN",
    USER = "USER",
}

export interface Product {
    id: string
    name: string
    price: string
    createdAt: Date
    updatedAt: Date
}
