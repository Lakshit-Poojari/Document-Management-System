import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { verifyToken } from "@/backend/middleware/authMiddleware";

export async function GET() {
  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value;

  console.log("Token:", token);

  if (!token) {
    return NextResponse.json({ message: "Unauthorized" },{ status: 401 });
  }

  try {
    const user = verifyToken(token);

    return NextResponse.json({ success: true, user,});
  } catch {
    return NextResponse.json( { message: "Invalid token" },{ status: 401 } );
  }
}