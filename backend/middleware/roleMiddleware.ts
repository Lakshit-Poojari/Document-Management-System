import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../lib/auth";

export async function verifyRole(token:string, role:string) {
    try {
        const decoded = jwt.verify(token, SECRET_KEY) as {user_id: number, email: string, role: string }

        if (decoded.role !== role) {
            throw new Error("Access denied");
        }
        return decoded
    } catch (error) {
        console.error("Error from middleware", error);
        throw error
    }
}