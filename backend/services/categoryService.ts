import { createCategoryModel, deleteCategoryModel, getAllCategoriesModel, getSingleCategoryModel, updateCategoryModel } from "../models/categoryModel"
import { CreateCategory } from "../types/categoryTypes"

export async function createCategoryService (category:CreateCategory) {
    try {
        if (!category.category_name) {
            throw new Error("Category name is required")
        }

        const result = await createCategoryModel(category)
        return result

    } catch (error) {
        console.error("Error creating categories(service):", error);
        
        throw error;
    }
}

export async function getAllCategoryService () {
    try {
        const getAllCategory = await getAllCategoriesModel()

        return getAllCategory
    } catch (error) {
        console.error("Error getting all category(service):", error);
        throw error;
    }
}

export async function getSingleCategoryService (categoryId:number) {
    try {
        const getSingleCategory = await getSingleCategoryModel(categoryId)
    } catch (error) {
        console.error("Error getting single category(service):", error);
        throw error;
    }
}

export async function updateCategoryService (categoryId:number, category:CreateCategory) {
    try {
        const updateCategory = await updateCategoryModel(categoryId, category)

        return updateCategory
    } catch (error) {
        console.error("Error updating category(service):", error);
        throw error;
    }
}

export async function deleteCategoryService (categoryId:number) {
    try {
        const deleteCategory = await deleteCategoryModel(categoryId)

        return deleteCategory
    } catch (error) {
        console.error("Error deleting category(service):", error);
        throw error;
    }
}