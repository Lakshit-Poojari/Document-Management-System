import { createDocumentController, getAllDocumentController } from "@/backend/controllers/documentController";
import { verifyToken } from "@/backend/middleware/authMiddleware";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies();

    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json( { message: "Unauthorized" }, { status: 401 } );
    }

    const user = verifyToken(token);

    const formData = await request.formData();

    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json( { message: "File is required" }, { status: 400 } );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadDir = path.join( process.cwd(),"public", "uploads");

    await fs.mkdir(uploadDir, { recursive: true,});

    const fileName = `${Date.now()}-${file.name}`;

    await fs.writeFile( path.join(uploadDir, fileName), buffer);

    const body = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,

      file_name: fileName,
      file_path: `/uploads/${fileName}`,

      file_type: file.type,
      file_size: file.size,

      uploaded_by: user.user_id,

      category_id: Number( formData.get("category_id")),
    };

    const result = await createDocumentController(body);

    return NextResponse.json(result, { status: 201,});

  } catch (error) {
    console.error(error);

    return NextResponse.json({ message:  error instanceof Error ? error.message : "Something went wrong",}, { status: 400, } );
  }
}

export async function GET() {
  try {
    const cookieStore = await cookies();

    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json( { message: "Unauthorized" }, { status: 401 } );
    }

    verifyToken(token);

    const result = await getAllDocumentController();

    return NextResponse.json({ result,});
  } catch (error) {
    
    return NextResponse.json( { message: error instanceof Error ? error.message : "Something went wrong", },{ status: 500, }
    );
  }
}