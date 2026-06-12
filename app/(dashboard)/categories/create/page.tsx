"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateCategory() {
  const router = useRouter();

  const [form, setForm] = useState({
    category_name: "",
    description: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = ( e: React.ChangeEvent< HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value.trimStart(),
    });
  };

  const handleSubmit = async ( e: React.FormEvent<HTMLFormElement>) => {
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
      const response = await fetch("/api/categories", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Category created successfully.");

        setTimeout(() => {
          router.push("/categories");
        }, 1000);
      } else {
        setMessage(data.message || "Failed to create category.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong.");
    }
  };

  const handleReset = () => {
    setForm({
      category_name: "",
      description: "",
    });

    setMessage("");
  };

  return (
    <div className="min-h-screen bg-amber-50 py-10 px-6">

      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-amber-600 mb-2">
          Create Category
        </h1>

        <p className="text-gray-600 mb-8">
          Create a new category to organize your documents efficiently.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>

            <label className="block text-lg font-medium mb-2">
              Category Name
              <span className="text-red-500"> *</span>
            </label>

            <input type="text" name="category_name" value={form.category_name} onChange={handleChange} required placeholder="Enter category name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400" />

          </div>

          <div>

            <label className="block text-lg font-medium mb-2">
              Description
            </label>

            <textarea rows={4} name="description" value={form.description} onChange={handleChange} placeholder="Enter category description"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-amber-400" />

          </div>

          {message && (
            <p
              className={`text-center font-medium ${
                message.includes("success")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}

          <div className="flex flex-wrap gap-4 pt-4">

            <button type="submit" className="px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition">
              Create Category
            </button>

            <button type="button" onClick={handleReset}
              className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
              Reset
            </button>

            <Link href="/categories">
              <button type="button" className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition">
                Back
              </button>
            </Link>

          </div>

        </form>

      </div>

    </div>
  );
}