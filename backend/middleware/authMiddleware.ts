import jwt from "jsonwebtoken"
import { SECRET_KEY } from "../lib/auth";


export async function verifyToken (token:string) {
     try {
        const decode = jwt.verify(token, SECRET_KEY)

        return decode
     } catch (error) {
        console.error("Error from middleware", error);
        throw error
     }
}