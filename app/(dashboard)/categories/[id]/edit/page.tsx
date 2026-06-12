"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditCategory() {
  const { id } = useParams();
  const router = useRouter();

  const [form, setForm] = useState({
    category_name: "",
    description: "",
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchCategory();
  }, []);

  const fetchCategory = async () => {
    try {
      const response = await fetch(`/api/categories/${id}`, {
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        setForm({
          category_name: data[0].category_name,
          description: data[0].description || "",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e: React.ChangeEvent< HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value.trimStart(),
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = {
      category_name: form.category_name
        .trim()
        .replace(/\s+/g, " ")
        .toLowerCase()
        .replace(/\b\w/g, (char) => char.toUpperCase()),

      description: form.description.trim(),
    };

    try {
      const response = await fetch(`/api/categories/${id}`, {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Category updated successfully");
        router.push("/categories");
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-amber-50 py-10 px-6">

      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-amber-600 mb-2">
          Edit Category
        </h1>

        <p className="text-gray-600 mb-8">
          Update category information.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6" >

          <div>

            <label className="block text-lg font-medium mb-2">
              Category Name
              <span className="text-red-500 ml-1">*</span>
            </label>

            <input type="text" name="category_name" value={form.category_name} onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"/>

          </div>

          <div>

            <label className="block text-lg font-medium mb-2">
              Description
            </label>

            <textarea rows={4} name="description" value={form.description} onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-amber-400" />

          </div>

          {message && (
            <p className="text-red-500">
              {message}
            </p>
          )}

          <div className="flex flex-wrap gap-4 pt-4">

            <button type="submit" className="px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600">
              Update Category
            </button>

            <button type="reset" onClick={fetchCategory}
              className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100">
              Reset
            </button>

            <Link href="/categories" className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600">
              Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}