export interface CreateDocument {
    title: string;
    description?: string | null;

    file_name: string;
    file_path: string;

    file_type?: string | null;
    file_size?: number | null;

    uploaded_by: number;
    category_id: number;
}

export interface Document {
    document_id: number;

    title: string;
    description: string | null;

    file_name: string;
    file_path: string;

    file_type: string | null;
    file_size: number | null;

    uploaded_by: number;
    category_id: number;

    created_at: Date;
    updated_at: Date;
}