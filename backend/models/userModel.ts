import { RowDataPacket } from "mysql2";
import db from "../lib/db";
import { createUserType, loginUserType } from "../types/userTypes";

export async function createUserModel(user: createUserType) {
    try {
        const [result] = await db.execute<RowDataPacket[]>("INSERT INTO users (full_name, email, password_hash, role) VALUES (?, ?, ?, ?)",
            [user.full_name, user.email, user.password_hash, user.role]
        );
        return result;
    } catch (error) {
        console.error("Error creating user(model):", error);
        throw error;
    }
}

export async function getUserModel(email: string) {
    try{
        const [rows] = await db.execute("SELECT * FROM users WHERE email = ?", [email ]);
        return rows;
    } 
    catch (error) {
        console.error("Error fetching user(model):", error);
        throw error;
    }
}
