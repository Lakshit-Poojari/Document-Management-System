import { deleteCategoryController, getSingleCategoryController, updateCategoryController } from "@/backend/controllers/categoryController";
import { verifyToken } from "@/backend/middleware/authMiddleware";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextResponse, { params }: { params: Promise<{ id: string }> }){
    try {
        const {id} = await params

        const result = await getSingleCategoryController(Number(id))

        return NextResponse.json( result)
    } catch (error) {
        return NextResponse.json( { message: "Error" }, { status: 500 } );
    }
}

export async function PUT( request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const cookieStore = await cookies();

        const token = cookieStore.get("token")?.value;

        if (!token) {
            return NextResponse.json( { message: "Unauthorized" },{ status: 401 });
        }

        const user = verifyToken(token);

        if (user.role !== "ADMIN") {
            return NextResponse.json( { message: "Access Denied. Admin only." }, { status: 403 });
        }

        const { id } = await params;

        const body = await request.json();

        const result = await updateCategoryController( Number(id), body);

        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json( { message: "Error" }, { status: 500 });
    }
    }

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const cookieStore = await cookies();

        const token = cookieStore.get("token")?.value;

        if (!token) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 } );
        }

        const user = verifyToken(token);

        if (user.role !== "ADMIN") {
            return NextResponse.json( { message: "Access Denied. Admin only." }, { status: 403 } );
        }

        const { id } = await params;

        const result = await deleteCategoryController( Number(id) );

        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json( { message: "Error" }, { status: 500 });
    }
}