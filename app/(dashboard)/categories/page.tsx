"use client";

import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

type Category = {
  category_id: number;
  category_name: string;
  description: string;
  total_documents: number;
};

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    fetchCategories();
    fetchUser();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch("/api/categories", {
        credentials: "include",
      });

      const data = await response.json();
      console.log(data);
      // Change this according to your API response
      setCategories(data);
    } catch (error) {
      console.error(error);
    }
  };

  const filteredCategories = categories.filter((category) =>
    category.category_name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const handleDelete = async (id: number) => {
  const confirmDelete = confirm(
    "Are you sure you want to delete this category?"
  );

  if (!confirmDelete) return;

  try {
    const response = await fetch(`/api/categories/${id}`, {
      method: "DELETE",
      credentials: "include",
    });

    const data = await response.json();

    if (response.ok) {
      alert("Category deleted successfully");

      fetchCategories(); // Refresh table
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error(error);
  }
};

  const fetchUser = async () => {
  const response = await fetch("/api/users/me", {
    credentials: "include",
  });

  const data = await response.json();

  if (response.ok) {
    setUser(data.user);
  }
};

  return (
    <div className="min-h-screen bg-amber-50 p-8">

      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-center mb-8">

          <div>
            <h1 className="text-5xl font-bold text-amber-600">
              Categories
            </h1>

            <p className="text-gray-600 mt-2">
              Organize and manage document categories.
            </p>
          </div>

          {user?.role === "ADMIN" && (
            <Link href="/categories/create">
              <button className="px-5 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600">
                Add Category
              </button>
            </Link>
          )}

        </div>

        <div className="mb-6">

          <input
            type="text"
            placeholder="Search Category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-96 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

        </div>

        <div className="overflow-hidden rounded-2xl border border-gray-300 shadow-lg">

          <table className="w-full">

            <thead className="bg-amber-100">

              <tr>
                <th className="px-4 py-4 text-left">
                  Category Name
                </th>

                <th className="px-4 py-4 text-left">
                  Description
                </th>

                <th className="px-4 py-4 text-left">
                  Documents
                </th>
                {user?.role === "ADMIN" && (

                <th className="px-4 py-4 text-left">
                  Actions
                </th>
                 )}
              </tr>

            </thead>

            <tbody>

              {filteredCategories.length > 0 ? (
                filteredCategories.map((category) => (

                  <tr key={category.category_id} className="border-t hover:bg-amber-50"
                  >

                    <td className="px-4 py-4">
                      {category.category_name}
                    </td>

                    <td className="px-4 py-4">
                      {category.description}
                    </td>

                    <td className="px-4 py-4">
                      {category.total_documents}
                    </td>

                    {user?.role === "ADMIN" && (
  <td className="px-4 py-4">
    <div className="flex gap-4">

      <Link href={`/categories/${category.category_id}/edit`}>
        <button className="text-amber-500 p-2 rounded-lg hover:bg-amber-100">
          <Pencil size={18} />
        </button>
      </Link>

      <button
        onClick={() => handleDelete(category.category_id)}
        className="text-red-500 p-2 rounded-lg hover:bg-red-100"
      >
        <Trash2 size={18} />
      </button>

    </div>
  </td>
)}

                  </tr>

                ))
              ) : (
                <tr>

                  <td
                    colSpan={4}
                    className="text-center py-8 text-gray-500"
                  >
                    No Categories Found
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