export interface CreateCategory {
    category_name: string;
    description?: string | null;
}

export interface Category {
    category_id: number;
    category_name: string;
    description: string | null;
    created_at: Date;
}