import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../lib/auth";

export interface JwtPayload {
  user_id: number;
  email: string;
  role: string;
}

export function verifyToken( token: string): JwtPayload {
  try {
    return jwt.verify( token, SECRET_KEY) as JwtPayload;
  } catch {
    throw new Error("Invalid Token");
  }
}