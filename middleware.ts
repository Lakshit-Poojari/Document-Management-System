import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./backend/middleware/authMiddleware";

export function middleware( request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect( new URL("/login", request.url));
  }

  try {
    verifyToken(token);

    return NextResponse.next();
  } catch {
    return NextResponse.redirect( new URL("/login", request.url));
  }
}

export const config = {
  matcher: [
    "/documents/:path*",
    "/categories/:path*",
    "/profile/:path*",
  ],
};