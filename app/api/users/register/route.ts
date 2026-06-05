import { registorController } from "@/backend/controllers/userController";
import { NextResponse } from "next/server";

export async function POST(request: NextResponse) {
    try {
        const body = await request.json()

        const result = await registorController(body)

        return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json({message: error instanceof Error? error.message: "Something went wrong"},{status: 400})
    }
}