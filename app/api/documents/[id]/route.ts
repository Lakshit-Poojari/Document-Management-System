import { deleteDocumentController, getSingleeDocumentController, updateDocumentController } from "@/backend/controllers/documentController";
import { verifyToken } from "@/backend/middleware/authMiddleware";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextResponse, { params }: { params: Promise<{ id: string }>}){
    try {
        const {id} = await params
        const result = await getSingleeDocumentController(Number(id))

        return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json({message:error}, {status:500})
    }
}

export async function PUT(request: NextRequest,{ params }: { params: Promise<{ id: string }> }) {
    try {
        const cookieStore = await cookies();

        const token = cookieStore.get("token")?.value;

        if (!token) {
            return NextResponse.json( { message: "Unauthorized" }, { status: 401 });
        }

        const user = verifyToken(token);

        const { id } = await params;

        const document = await getSingleeDocumentController(Number(id));

        const doc = (document as any[])[0];

        if (!doc) {
            return NextResponse.json( { message: "Document not found" }, { status: 404 } );
        }

        if ( user.role !== "ADMIN" && doc.uploaded_by !== user.user_id) {
            return NextResponse.json( { message: "Access Denied" }, { status: 403 });
        }

        const body = await request.json();

        const result = await updateDocumentController( Number(id), body );

        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json( { message: "Something went wrong" }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const cookieStore = await cookies();

        const token = cookieStore.get("token")?.value;

        if (!token) {
        return NextResponse.json( { message: "Unauthorized" }, { status: 401 });
        }

        const user = verifyToken(token);

        const { id } = await params;

        const document = await getSingleeDocumentController(Number(id));

        const doc = (document as any[])[0];

        if (!doc) {
            return NextResponse.json( { message: "Document not found" }, { status: 404 });
        }

        if ( user.role !== "ADMIN" && doc.uploaded_by !== user.user_id) {
            return NextResponse.json( { message: "Access Denied" }, { status: 403 } );
        }

        const result = await deleteDocumentController( Number(id));

        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json( { message: "Something went wrong" },{ status: 500 } );
    }
}