import { createDocumentModel, deleteDocumentModel,
         getAllDocumentModel, getSingleDocumentModel, updateDocumentModel } from "../models/documentModel";
import { CreateDocument } from "../types/documentTypes";

export async function createDocumentService(
  document: CreateDocument
) {
  try {
    if (
      !document.title ||
      !document.file_name ||
      !document.file_path ||
      !document.uploaded_by ||
      !document.category_id
    ) {
      throw new Error("Required fields are missing");
    }

    const result = await createDocumentModel(document);

    return {
      success: true,
      message: "Document created successfully",
      result,
    };
  } catch (error) {
    console.error("Error creating document(service):", error);
    throw error;
  }
}

export async function getAllDocumentService() {
    try {
        const result = await getAllDocumentModel()

        return result
    } catch (error) {
        console.error("Error in creating document(service):", error);
        throw error
        
    }
}

export async function getSingleDocumentService(documentID: number) {
    try {
        const result = await getSingleDocumentModel(documentID)
         return result
    } catch (error) {
        console.error("Error in creating document(service):", error);
        throw error
    }
}

export async function updateDocumentService(documentID: number, document:CreateDocument ) {
    try {
        const result = await updateDocumentModel(documentID, document)

        return result
    } catch (error) {
        console.error("Error in creating document(service):", error);
        throw error
        
    }
}

export async function deleteDocumentService(documentID: number) {
    try {
        const result = await deleteDocumentModel(documentID)

        return result
    } catch (error) {
        console.error("Error in creating document(service):", error);
        throw error
    }
}