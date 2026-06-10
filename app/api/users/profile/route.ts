import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { verifyToken } from "@/backend/middleware/authMiddleware";
import { getUserModel } from "@/backend/models/userModel";

export async function GET() {
  try {
    const cookieStore = await cookies();

    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const decoded = verifyToken(token);

    const users = await getUserModel(decoded.email) as any[];

    if (users.length === 0) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    const user = users[0];

    

    return NextResponse.json({
      user_id: user.user_id,
      full_name: user.full_name,
      email: user.email,
      role: user.role,
      created_at: user.created_at,
    });

  } catch (error) {
    return NextResponse.json(
      { message: "Invalid token" },
      { status: 401 }
    );
  }
}