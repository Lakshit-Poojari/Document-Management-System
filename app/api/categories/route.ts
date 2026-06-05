import { createCategoryController, getAllCategoryController } from "@/backend/controllers/categoryController";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const categories = await getAllCategoryController()

        return NextResponse.json(categories)
    } catch (error) {
        return NextResponse.json({message:error}, {status:500})
    }
}

export async function POST(request: NextResponse){
    try {
        const body = await request.json()

        const result = await createCategoryController(body)

        return NextResponse.json(result)
    } catch (error) {
        
        return NextResponse.json( { message: error instanceof Error ? error.message : "Error" }, { status: 400 } );
    }
}

