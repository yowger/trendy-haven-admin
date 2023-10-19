import { api_url } from "./baseUrl"

export const allowedOrigins: string[] =
    process.env.NODE_ENV === "development"
        ? [
              "http://localhost:3000",
              "http://localhost:3001",
              "http://localhost:3002",
          ]
        : [api_url]
