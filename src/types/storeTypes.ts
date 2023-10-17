export interface Store {
    id: string
    name: string
    country: string | null
    address: string | null
    email: string | null
    city: string | null
    zipCode: string | null
    phoneNumber: string | null
    createdAt: Date
    updatedAt: Date
    userId: string
}
