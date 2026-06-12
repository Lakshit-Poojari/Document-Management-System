import { createCategoryController, getAllCategoryController } from "@/backend/controllers/categoryController";
import { verifyToken } from "@/backend/middleware/authMiddleware";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
        const categories = await getAllCategoryController()

        return NextResponse.json(categories)
    } catch (error) {
        return NextResponse.json({message:error}, {status:500})
    }
}

export async function POST(request: NextRequest) {
    try {
        const cookieStore = await cookies();

        const token = cookieStore.get("token")?.value;

        if (!token) {
        return NextResponse.json({ message: "Unauthorized" },{ status: 401 });
        }

        const user = verifyToken(token);

        if (user.role !== "ADMIN") {
        return NextResponse.json( { message: "Access Denied. Admin only." }, { status: 403 } );
        }

        const body = await request.json();

        const result = await createCategoryController(body);

        return NextResponse.json(result);
    } catch (error) {

        return NextResponse.json( { message: error instanceof Error ? error.message : "Error", }, { status: 400, } );
    }
}

