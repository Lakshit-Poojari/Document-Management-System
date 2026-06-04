import { createDocumentService, deleteDocumentService, getAllDocumentService, getSingleDocumentService, updateDocumentService } from "../services/documentService";
import { CreateDocument } from "../types/documentTypes";

export async function createDocumentController(document: CreateDocument) {
    try {
        const result = await createDocumentService(document)

        return result
    } catch (error) {
        console.error("Error in creating document(controller):", error);
        throw error;
    }
}

export async function getSingleeDocumentController(documentId: number) {
    try {
        const result = await getSingleDocumentService(documentId)

        return result
    } catch (error) {
        console.error("Error in fetching single document(controller):", error);
        throw error;
    }
}

export async function getAllDocumentController() {
    try {
        const result = await getAllDocumentService()

        return result
    } catch (error) {
        console.error("Error in fetching all document(controller):", error);
        throw error;
    }
}

export async function updateDocumentController(documentId: number, document: CreateDocument) {
    try {
        const result = await updateDocumentService(documentId, document)
        return result
    } catch (error) {
        console.error("Error in update document(controller):", error);
        throw error;
    }
}

export async function deleteDocumentController(documentId: number) {
    try {
        const result = await deleteDocumentService(documentId)
        return result
    } catch (error) {
        console.error("Error in delete document(controller):", error);
        throw error;
    }
}