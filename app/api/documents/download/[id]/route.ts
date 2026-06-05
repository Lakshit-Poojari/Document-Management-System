import { getSingleeDocumentController } from "@/backend/controllers/documentController";
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";

export async function GET(request:NextResponse, {params}:{params: Promise<{id:string}>}){
    try {
        const {id} = await params

        const document = await getSingleeDocumentController(Number(id))

        const doc = (document as any[])[0]

        if (!doc) {
            return NextResponse.json({message: "Document not found"}, {status: 404})
        }

        const filePath = path.join( process.cwd(), "public", doc.file_path)

        const fileBuffer = await fs.readFile( filePath );

        return new NextResponse( fileBuffer, { headers: {"Content-Type": "application/octet-stream", "Content-Disposition": `attachment; filename="${doc.file_name}"` } });

    } catch (error) {
        return NextResponse.json({message:error}, {status:500})
    }
}