export interface createUserType {
    full_name: string;
    email: string;
    password: string;
    role: "ADMIN" | "USER";
}

export interface userType {
    user_id: number;
    full_name: string;
    email: string;
    password: string;
    role: "ADMIN" | "USER";
    created_at: Date;
    updated_at: Date;
}

export interface loginUserType {
    email: string;
    password: string;
}
