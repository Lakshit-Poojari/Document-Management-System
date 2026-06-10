import { getSingleeDocumentController } from "@/backend/controllers/documentController";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const document = await getSingleeDocumentController(Number(id));

    const doc = (document as any[])[0];

    if (!doc) {
      return NextResponse.json(
        { message: "Document not found" },
        { status: 404 }
      );
    }

    const filePath = path.join(
      process.cwd(),
      "public",
      doc.file_path.replace(/^\/+/, "")
    );

    const fileBuffer = await fs.readFile(filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": doc.file_type || "application/octet-stream",
        "Content-Disposition": `attachment; filename="${doc.file_name}"`,
      },
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "File not found" },
      { status: 500 }
    );
  }
}