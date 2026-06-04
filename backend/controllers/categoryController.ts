import { createCategoryService, deleteCategoryService, getAllCategoryService, getSingleCategoryService, updateCategoryService } from "../services/categoryService";
import { CreateCategory } from "../types/categoryTypes";

export async function createCategoryController(category:CreateCategory) {
    try {
        const result = await createCategoryService(category)
        return result
    } catch (error) {
        console.error("Error creating category(controller):", error);
        throw error;
    }
}

export async function getAllCategoryController() {
    try {
        const result = await getAllCategoryService()

        return result
    } catch (error) {
        console.error("Error creating category(controller):", error);
        throw error;
    }
}

export async function getSingleCategoryController(categoryId: number) {
    try {
        const result = await getSingleCategoryService(categoryId)
        return result
    } catch (error) {
        console.error("Error creating category(controller):", error);
        throw error;
    }
}

export async function updateCategoryController(categoryId: number, category:CreateCategory) {
    try {
        const result = await updateCategoryService(categoryId, category)

        return result
    } catch (error) {
        console.error("Error creating category(controller):", error);
        throw error;
    }
}

export async function deleteCategoryController(categoryId: number) {
    try {
        const result = await deleteCategoryService(categoryId)

        return result
    } catch (error) {
        console.error("Error creating category(controller):", error);
        throw error;
    }
}