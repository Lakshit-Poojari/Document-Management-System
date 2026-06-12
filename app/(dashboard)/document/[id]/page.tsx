"use client";

import {
  Download,
  Pencil,
  Trash2,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Loading from "@/app/loading";

type Document = {
  document_id: number;
  title: string;
  description: string;
  category_name: string;
  file_name: string;
  file_type: string;
  file_size: number;
  file_path: string;
  uploaded_by_name: string;
  created_at: string;
};

export default function DocumentDetails() {
  const { id } = useParams();
  const router = useRouter();

  const [doc, setDoc] = useState<Document | null>(null);

  useEffect(() => {
    fetchDocument();
  }, []);

  const fetchDocument = async () => {
    try {
      const response = await fetch(`/api/documents/${id}`, {
        credentials: "include",
      });

      const data = await response.json();

      console.log('====================================');
      console.log(data);
      console.log('====================================');

      if (response.ok) {
        setDoc(data[0]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDownload = (filePath: string) => {
    const link = document.createElement("a");

    link.href = filePath;

    link.download = "";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  const handleDelete = async () => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this document?"
    );

    if (!confirmDelete) return;

    const response = await fetch(`/api/documents/${id}`, {
      method: "DELETE",
      credentials: "include",
    });

    const data = await response.json();

    if (response.ok) {
      alert(data.message);
      router.push("/document");
    } else {
      alert(data.message);
    }
  };

  if (!doc) {
    return (
      <Loading/>
    );
  }

  return (
    <div className="min-h-screen bg-amber-50 py-10 px-6">

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">

        <div className="flex justify-between items-center mb-8">

          <h1 className="text-4xl font-bold text-amber-600">
            Document Details
          </h1>

          <Link href="/document" className="flex items-center gap-2 text-gray-600 hover:text-amber-600">
            <ArrowLeft size={18} />
            Back
          </Link>

        </div>

        <div className="space-y-6">

          <div>
            <h2 className="font-semibold text-gray-500">Title</h2>
            <p>{doc.title}</p>
          </div>

          <div>
            <h2 className="font-semibold text-gray-500">Description</h2>
            <p>{doc.description}</p>
          </div>

          <div>
            <h2 className="font-semibold text-gray-500">Category</h2>
            <p>{doc.category_name}</p>
          </div>

          <div>
            <h2 className="font-semibold text-gray-500">File Name</h2>
            <p>{doc.file_name}</p>
          </div>

          <div>
            <h2 className="font-semibold text-gray-500">File Type</h2>
            <p>{doc.file_type}</p>
          </div>

          <div>
            <h2 className="font-semibold text-gray-500">File Size</h2>
            <p>{(doc.file_size / 1024).toFixed(2)} KB</p>
          </div>

          <div>
            <h2 className="font-semibold text-gray-500">Uploaded By</h2>
            <p>{doc.uploaded_by_name}</p>
          </div>

          <div>
            <h2 className="font-semibold text-gray-500">Uploaded On</h2>
            <p>{new Date(doc.created_at).toLocaleDateString("en-IN")}</p>
          </div>

        </div>

        <div className="flex gap-4 mt-10">

          <button onClick={() => handleDownload(doc.file_path)}
            className="flex items-center gap-2 px-5 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600" >
            <Download size={18} />
            Download
          </button>

          <Link href={`/document/${doc.document_id}/edit`}>
            <button className="flex items-center gap-2 px-5 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
              <Pencil size={18} />
              Edit
            </button>
          </Link>

          <button onClick={handleDelete}
            className="flex items-center gap-2 px-5 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600">
            <Trash2 size={18} />
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}