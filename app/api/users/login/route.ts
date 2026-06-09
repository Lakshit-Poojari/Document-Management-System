import { loginController } from "@/backend/controllers/userController";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const result: {
  success: boolean;
  token: string;
  user: {
    user_id: number;
    full_name: string;
    email: string;
    role: string;
  };
} = await loginController(body);

    const response = NextResponse.json({
      success: true,
      user: result.user,
    });

    response.cookies.set("token", result.token, {
  httpOnly: true,
  secure: false,
  sameSite: "lax",
  path: "/",
  maxAge: 60 * 60 * 24, // 1 day
});

    return response;
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
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