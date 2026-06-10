import { createDocumentController, getAllDocumentController } from "@/backend/controllers/documentController";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json(
        { message: "File is required" },
        { status: 400 }
      );
    }

    // TODO: Get uploaded_by from JWT/cookie
    const uploaded_by = 1;

    const body = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,

      file_name: file.name,
      file_path: `/uploads/${file.name}`, // temporary

      file_type: file.type,
      file_size: file.size,

      uploaded_by,

      category_id: Number(formData.get("category_id")),
    };

    const result = await createDocumentController(body);

    return NextResponse.json(result, {
      status: 201,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong",
      },
      {
        status: 400,
      }
    );
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