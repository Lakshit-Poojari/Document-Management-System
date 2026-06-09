import { verifyToken } from "./authMiddleware";

export function verifyRole( token: string, requiredRole: string) {
  const decoded = verifyToken(token);

  if (decoded.role !== requiredRole) {
    throw new Error("Access Denied");
  }

  return decoded;
}