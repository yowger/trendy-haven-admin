import { DataTable } from "@/components/ui/data-table"
import { Payment, columns } from "./columns"
import useGetProducts from "@/hooks/api/useGetProduct"

async function getData(): Promise<Payment[]> {
    return [
        {
            id: "728ed520",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "728ed52a",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "728ed52b",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "728ed52c",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "728ed52d",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "728ed52e",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "728ed52g",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "728ed52h",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "728ed52i",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "728ed52j",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "728ed52j",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "728ed52k",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "728ed52l",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "728ed52m",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "728ed52n",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "728ed520",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "728ed52p",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "728ed52q",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "728ed52r",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "728ed52s",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
    ]
}

export default async function Test() {
    const data = await getData()

    return (
        <div className="max-w-5xl">
            <DataTable columns={columns} data={data} />
        </div>
    )
}
