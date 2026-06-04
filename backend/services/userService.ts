import bcrypt from "bcryptjs";
import { createUserModel, getUserModel } from "../models/userModel";
import { createUserType, loginUserType } from "../types/userTypes";
import { SECRET_KEY } from "../lib/auth";
import jwt from "jsonwebtoken"

export async function createUserService(user:createUserType) {
    try {

        if (!user.full_name || !user.email || !user.password || !user.role ) {
            throw new Error("All fields are required");
        }

        const existingUser = await getUserModel(user.email) as any[];

        if (existingUser && existingUser.length > 0) {
            throw new Error("User already exists");
        }

        const hashedPassword = await bcrypt.hash(user.password, 10)

        const result = await createUserModel({...user, password: hashedPassword})

        return result

    } catch (error) {
        console.error("Error creating user(Service)");
        throw error
    }
}

export async function loginuserService(loginUser:loginUserType) {
    try {
        
        if (!loginUser.email || !loginUser.password) {
            throw new Error("All fields are required");
        }


        const userExist = await getUserModel(loginUser.email) as any[];

        if (!userExist || userExist.length === 0) {
            throw new Error("User doesn't exists please register yourself");
        }

        const user = userExist[0]

        const isPasswordVaild = await bcrypt.compare(loginUser.password, user.password_hash)

        if (!isPasswordVaild) {
            throw new Error("Invalid credential")
        }

        const token =
            jwt.sign({ user_id: user.user_id, email: user.email, role: user.role }, SECRET_KEY, { expiresIn: "1d" });

        return { success: true, token, user: { user_id: user.user_id, full_name: user.full_name, email: user.email, role: user.role }};

    } catch (error) {
        console.error("Error creating user(Service)");
        throw error
    }
}


