"use client";

import {Eye, Pencil, Download, Trash2, FolderOpen} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

type Document = {
  document_id: number;
  title: string;
  category_name: string;
  file_size: string;
  created_at: string;
};

export default function Document() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      const response = await fetch("/api/documents", {
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setDocuments(data.result);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const filteredDocuments = documents.filter((doc) =>
    doc.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-amber-50">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold text-amber-600">
          Documents
        </h1>

        <p className="text-gray-600 mt-2">
          Manage and organize your documents securely.
        </p>

        <div className="flex justify-between mt-8">

          <input
            type="text"
            placeholder="Search document..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-80"
          />

          <Link href="/document/create">
            <button className="px-5 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600">
              Upload Document
            </button>
          </Link>

        </div>

        <div className="overflow-hidden rounded-2xl shadow-lg pt-6">

          <table className="w-full">

            <thead className="bg-amber-100">

              <tr>

                <th className="px-4 py-3 text-left">
                  Title
                </th>

                <th className="px-4 py-3 text-left">
                  Category
                </th>

                <th className="px-4 py-3 text-left">
                  Size
                </th>

                <th className="px-4 py-3 text-left">
                  Date
                </th>

                <th className="px-4 py-3 text-left">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {filteredDocuments.map((doc) => (

                <tr
                  key={doc.document_id}
                  className="hover:bg-amber-50 transition"
                >

                  <td className="px-4 py-3">
                    {doc.title}
                  </td>

                  <td className="px-4 py-3">
                    {doc.category_name}
                  </td>

                  <td className="px-4 py-3">
                    {doc.file_size}
                  </td>

                  <td className="px-4 py-3">
                    {new Date(doc.created_at).toLocaleDateString("en-IN")}
                  </td>

                  <td className="px-4 py-3">

                    <div className="flex gap-4">

                      <Link href={`/document/${doc.document_id}`}>
                        <button className="p-2 rounded-lg text-blue-500 hover:bg-blue-100">
                          <Eye size={18} />
                        </button>
                      </Link>

                      <button className="p-2 rounded-lg text-purple-500 hover:bg-purple-100">
                        <FolderOpen size={18} />
                      </button>

                      <Link href={`/document/${doc.document_id}/edit`}>
                        <button className="p-2 rounded-lg text-amber-500 hover:bg-amber-100">
                          <Pencil size={18} />
                        </button>
                      </Link>

                      <button className="p-2 rounded-lg text-green-500 hover:bg-green-100">
                        <Download size={18} />
                      </button>

                      <button
                        className="p-2 rounded-lg text-red-500 hover:bg-red-100"
                      >
                        <Trash2 size={18} />
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

              {filteredDocuments.length === 0 && (

                <tr>

                  <td
                    colSpan={5}
                    className="text-center py-8 text-gray-500"
                  >
                    No documents found.
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}