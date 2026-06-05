import { createDocumentController, getAllDocumentController } from "@/backend/controllers/documentController";
import { NextResponse } from "next/server";


export async function POST(request:NextResponse){
    try {
        const body = await request.json()

        const result = await createDocumentController(body)

        return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json( {message:error}, {status: 400})
    }
}

export async function GET(){
    try {
        const result = await getAllDocumentController()

        return NextResponse.json({result})
    } catch (error) {
        return NextResponse.json({message:error}, {status:500})
    }
}