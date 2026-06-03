export interface CreateUser {
    full_name: string;
    email: string;
    password: string;
    role: "ADMIN" | "USER";
}

export interface User {
    user_id: number;
    full_name: string;
    email: string;
    password: string;
    role: "ADMIN" | "USER";
    created_at: Date;
    updated_at: Date;
}

export interface LoginUser {
    email: string;
    password: string;
}
