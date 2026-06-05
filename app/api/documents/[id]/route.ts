import { deleteDocumentController, getSingleeDocumentController, updateDocumentController } from "@/backend/controllers/documentController";
import { NextResponse } from "next/server";

export async function GET(request:NextResponse, { params }: { params: Promise<{ id: string }>}){
    try {
        const {id} = await params
        const result = await getSingleeDocumentController(Number(id))

        return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json({message:error}, {status:500})
    }
}

export async function PUT(request:NextResponse, { params }: { params: Promise<{ id: string }>}){
    try {
        const {id} = await params

        const body = await request.json()

        const result = await updateDocumentController(Number(id), body)
        return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json({message:error}, {status:500})
    }
}

export async function DELETE(request:NextResponse, { params }: { params: Promise<{ id: string }>}){
    try {
        const {id} = await params

        const result = await deleteDocumentController(Number(id))
        return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json({message:error}, {status:500})
    }
}