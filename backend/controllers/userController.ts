import { createCategoryService } from "../services/categoryService";
import { createUserService, loginuserService } from "../services/userService";
import { createUserType, userType } from "../types/userTypes";

export async function registorController(user: createUserType) {
    try {
        const result = await createUserService(user)
        return result
    } catch (error) {
        console.error("Error creating user(controller):", error);
        throw error;
    }
}

export async function loginController(user: userType) {
    try {
        const result = await loginuserService(user)
        return result
    } catch (error) {
        console.error("Error login user(controller):", error);
        throw error;
    }
}