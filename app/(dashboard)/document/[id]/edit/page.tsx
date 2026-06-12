"use client"

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditDocument() {

  const { id } = useParams();
  const router = useRouter();

  const [categories, setCategories] = useState<any[]>([]);

  const [form, setForm] = useState({
    title: "",
    description: "",
    category_id: "",
    file_name: "",
    file: null as File | null,
  });

  useEffect(() => {
    fetchDocument();
    fetchCategories();
  }, []);

  const fetchDocument = async () => {
    const response = await fetch(`/api/documents/${id}`);

    const data = await response.json();
    console.log('====================================');
    console.log(data);
    console.log('====================================');
    const doc = data[0];

    setForm({
      title: doc.title,
      description: doc.description || "",
      category_id: String(doc.category_id),
      file_name: doc.file_name,
      file: null,
    });
  };

  const fetchCategories = async () => {
    const response = await fetch("/api/categories");

    const data = await response.json();

    setCategories(data);
  };

  const handleChange = (e: React.ChangeEvent< HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement >) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
    if (e.target.files) {
      setForm({
        ...form,
        file: e.target.files[0],
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("category_id", form.category_id);

    if (form.file) {
      formData.append("file", form.file);
    }

    const response = await fetch(`/api/documents/${id}`, {
      method: "PUT",
      credentials: "include",
      body: formData,
    });

    const data = await response.json();

    if (response.ok) {
      alert("Document updated successfully");

      router.push("/document");
    } else {
      alert(data.message);
    }
  };


  return (
    <div className="min-h-screen bg-amber-50  py-10 px-6">

      <div className="max-w-3xl mx-auto bg-white  rounded-2xl shadow-xl p-8">
        <div className="flex justify-between items-center mb-8">
        <div>

        <h1 className="text-4xl font-bold text-amber-600  mb-2">Edit Document</h1>

        <p className="text-gray-600  mb-8">Update the document details and upload a new file if needed.</p>

        </div>

        <Link href={"/document"} className="flex items-center gap-2 px-4 py-2 transition text-gray-600 ">
          <ArrowLeft size={18} />
          Back
        </Link>
    </div>
        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="block text-lg font-medium mb-2">Title <span className="text-red-500">*</span></label>

            <input type="text" defaultValue="Employee Handbook" onChange={handleChange} name="title" value={form.title} 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400" />
          </div>

          <div>
            <label className="block text-lg font-medium mb-2">Description</label>

            <textarea rows={4} defaultValue="Company policies and employee guidelines." onChange={handleChange} name="description" value={form.description} 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg
              resize-none focus:outline-none focus:ring-2 focus:ring-amber-400" />
          </div>

          <div>
            <label className="block text-lg font-medium mb-2"> Category <span className="text-red-500">*</span></label>

            <select defaultValue="HR" className="w-full px-4 py-3 border border-gray-300 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-amber-400" name="category_id" value={form.category_id} onChange={handleChange}>
              {categories.map((category) => (
                <option key={category.category_id} value={category.category_id}>
                  {category.category_name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-lg font-medium mb-2">Current File</label>

            <div className="px-4 py-3 bg-gray-100 rounded-lg">{form.file_name.split("-").splice(1).join("-")}</div>
          </div>

          <div>
            <label className="block text-lg font-medium mb-2">Replace File</label>

            <input type="file" onChange={handleFileChange} className="w-full px-4 py-3 border rounded-lg"/>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">

            <button type="submit" className="px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition">
              Update Document
            </button>

            <button type="reset" className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100transition">
              Reset
            </button>

            <Link href="/document" className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition">
              Back
            </Link>

          </div>

        </form>

      </div>

    </div>
  );
}