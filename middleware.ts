// import { NextRequest, NextResponse } from "next/server";
// import { verifyToken } from "./backend/middleware/authMiddleware";

// export function middleware(request: NextRequest) {

//   const token =
//     request.cookies.get("token")?.value;

//   if (!token) {
//     return NextResponse.redirect(
//       new URL("/login", request.url)
//     );
//   }

//   try {
//     verifyToken(token);

//     return NextResponse.next();
//   } catch {

//     return NextResponse.redirect(
//       new URL("/login", request.url)
//     );

//   }
// }

// export const config = {
//   matcher: [
//     "/document/:path*",
//     "/categories/:path*",
//     "/profile/:path*",
//   ],
// };

// import { NextRequest, NextResponse } from "next/server";
// import { verifyToken } from "./backend/middleware/authMiddleware";

// export function middleware(request: NextRequest) {
//   const token = request.cookies.get("token")?.value;

//   console.log("Middleware token:", token);

//   if (!token) {
//     console.log("No token found");
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   try {
//     const user = verifyToken(token);
//     console.log("Verified user:", user);

//     return NextResponse.next();
//   } catch (error) {
//     console.log("Token verification failed:", error);

//     return NextResponse.redirect(new URL("/login", request.url));
//   }
// }

import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/document/:path*",
    "/categories/:path*",
    "/profile/:path*",
  ],
};