"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Category = {
  category_id: number;
  category_name: string;
};

export default function CreateDocument() {

  const [form, setForm] = useState({
    title: "",
    description: "",
    category_id: "",
    file: null as File | null,
  });
  const [categories, setCategories] = useState<Category[]>([]);
  const [message, setmessage] = useState("")
  const router = useRouter()

  useEffect(() => {
    fetchCategories();
  }, [])

  const fetchCategories = async() => {
    try {
      const response = await fetch("/api/categories");

      const data = await response.json();

      setCategories(data);    
    } catch (error) {
      console.error();
    }
  }

  const handleChange = async (e:React.ChangeEvent< HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement >) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  const handleFileChange = async(e:React.ChangeEvent< HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement >)=>{

  }

  const handleSubmit = async ( e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("title", form.title);
      formData.append("description", form.description);
      formData.append("category_id", form.category_id);

      if (form.file) {
        formData.append("file", form.file);
      }

      const response = await fetch("/api/documents", {
          method: "POST",
          credentials: "include",
          body: formData,
        });

      const data = await response.json();

      if (response.ok) {
        setmessage("Document uploaded successfully.");

        router.push("/document");
      } else {
        setmessage(data.message);
      }
    } catch (error) {
      console.error(error);
      setmessage("Something went wrong.");
    }
  }
  
  return (
    <div className="min-h-screen bg-amber-50 py-10 px-6">

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-amber-600 mb-2">
          Create Document
        </h1>

        <p className="text-gray-600 mb-8">
          Upload and organize your documents securely.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6" >

          <div>
            <label className="block mb-2 font-medium">Title *</label>

            <input type="text" placeholder="Enter document title" name="title" value={form.title} onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg"/>
          </div>

          <div>
            <label className="block mb-2 font-medium">Description</label>

            <textarea rows={4} placeholder="Enter description" name="description" value={form.description} onChange={handleChange} 
                className="w-full px-4 py-3 border rounded-lg"/>
          </div>

          <div>
            <label className="block mb-2 font-medium">Category *</label>

            <select className="w-full px-4 py-3 border rounded-lg" name="category_id" value={form.category_id} onChange={handleChange} >

                    <option value="">Select Category</option>

                    {categories.map((category) => (
                      <option key={category.category_id} value={category.category_id} >
                        {category.category_name}
                      </option>
                    ))}

            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">Upload File *</label>

            <input type="file" className="w-full px-4 py-3 border rounded-lg" onChange={handleFileChange}/>
          </div>

          <div className="flex gap-4">

            <button type="submit" className="px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600" >
              Upload Document
            </button>

            <button type="button" className="px-6 py-3 border rounded-lg" onClick={() => router.push("/document")}>
              Cancel
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}