import db from "../lib/db";
import { CreateUser, LoginUser } from "../types/userTypes";

export async function createUser(user: CreateUser) {
    try {
        const [result] = await db.execute("INSERT INTO users (full_name, email, password, role) VALUES (?, ?, ?, ?)",
            [user.full_name, user.email, user.password, user.role]
        );
        return result;
    } catch (error) {
        console.error("Error creating user(model):", error);
        throw error;
    }
}

export async function getUser(user: LoginUser) {
    try{
        const [rows] = await db.execute("SELECT * FROM users WHERE email = ? AND password = ?", [user.email, user.password]);
        return rows;
    } 
    catch (error) {
        console.error("Error fetching user(model):", error);
        throw error;
    }
}
