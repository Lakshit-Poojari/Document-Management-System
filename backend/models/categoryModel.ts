
import { db } from "../lib/db";
import { CreateCategory } from "../types/categoryTypes";

export async function createCategoryModel(category: CreateCategory) {
    try{
        const [result] = await db.execute("INSERT INTO categories (category_name, description) VALUES (?, ?)",
            [category.category_name, category.description ?? null]
        );
        return result;  
    }
    catch (error) {
        console.error("Error creating category(model):", error);
        throw error;
    }
}

export async function getAllCategoriesModel() {
    try{
        const [categories] = await db.execute("SELECT * FROM categories");
        return categories;
    }
    catch (error) {
        console.error("Error fetching categories(model):", error);
        throw error;
    }
}

export async function getSingleCategoryModel(category_id: number) {
    try{
        const [category] = await db.execute("SELECT * FROM categories WHERE category_id = ? ", [category_id]);
        return category
    }
    catch (error) {
        console.error("Error fetching category by ID(model):", error);
        throw error;
    }
}

export async function updateCategoryModel(category_id: number, category: CreateCategory) {
    try{
        const [result] = await db.execute(
            "UPDATE categories SET category_name=?, description = ? WHERE category_id = ?",
             [category.category_name, category.description ?? null, category_id])
        return result
    }
    catch (error) {
        console.error("Error updating category(model):", error);
        throw error;
    }
}

export async function deleteCategoryModel(category_id: number) {
    try{
        const [result] = await db.execute("DELETE FROM categories WHERE category_id = ?", [category_id])

        return result
    }
    catch (error) {
        console.error("Error deleting category(model):", error);
        throw error;
    }
}
