import db from "../lib/db";
import { CreateDocument, Document } from "../types/documentTypes";

export async function createDocumentModel(document: CreateDocument) {
    try {
        const [result] =await db.execute
        (`INSERT INTO documents 
            (title, description, file_name, file_path, file_type, file_size,  uploaded_by, category_id)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?) `,
            [
                document.title, document.description ?? null, document.file_name, document.file_path,
                document.file_type ?? null, document.file_size ?? null, document.uploaded_by, document.category_id
            ]
        )

        return result

    } catch (error) {
        console.error("Error creating document(model):", error);
        throw error;
    }
}

export async function getSingleDocumentModel(documentId: number) {
  try {
    const [result] = await db.execute(
      `
      SELECT
        d.document_id,
        d.title,
        d.description,
        d.file_name,
        d.file_type,
        d.file_size,
        d.file_path,
        d.created_at,
        d.uploaded_by,
        u.full_name AS uploaded_by_name,
        c.category_name
      FROM documents d
      LEFT JOIN users u
        ON d.uploaded_by = u.user_id
      LEFT JOIN categories c
        ON d.category_id = c.category_id
      WHERE d.document_id = ?
      `,
      [documentId]
    );

    return result;
  } catch (error) {
    console.error("Error fetching document:", error);
    throw error;
  }
}

export async function getAllDocumentModel() {
    try {
        const [result] =await db.execute("SELECT * FROM documents ORDER BY document_id DESC")

        return result
    } catch (error) {
        console.error("Error creating document(model):", error);
        throw error;
    }
}

export async function updateDocumentModel(documentId: number, document: CreateDocument) {
    try {
        const [result] =await db.execute(`UPDATE documents SET 
                title = ?, description = ?, file_name = ?,
                file_path = ?, file_type = ?, file_size = ?,
                category_id = ?
            WHERE document_id = ?`, [document.title,
                document.description ?? null,
                document.file_name,
                document.file_path,
                document.file_type ?? null,
                document.file_size ?? null,
                document.category_id,
                documentId])

        return result
    } catch (error) {
        console.error("Error creating document(model):", error);
        throw error;
    }
}

export async function deleteDocumentModel(documentId: number) {
    try {
        const [result] =await db.execute("DELETE FROM documents WHERE document_id=?", [documentId])

        return result
    } catch (error) {
        console.error("Error creating document(model):", error);
        throw error;
    }
}