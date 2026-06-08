import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";

export default function Categories() {
  return (
    <div className="min-h-screen bg-amber-50 p-8">

      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-center mb-8">

          <div>
            <h1 className="text-5xl font-bold text-amber-600 ">Categories</h1>

            <p className="text-gray-600 mt-2">Organize and manage document categories.</p>
          </div>

          <Link href={"/categories/create"}><button className="px-5 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition">
            Add Category
          </button></Link>

        </div>

        <div className="mb-6">

          <input type="text" placeholder="Search Category..."
            className="w-full md:w-96 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"/>

        </div>

        <div className="overflow-hidden rounded-2xl border border-gray-300 shadow-lg">

          <table className="w-full">

            <thead className="bg-amber-100">

              <tr>
                <th className="px-4 py-4 text-left">Category Name</th>
                <th className="px-4 py-4 text-left">Description</th>
                <th className="px-4 py-4 text-left">Documents</th>
                <th className="px-4 py-4 text-left"> Actions</th>
              </tr>

            </thead>

            <tbody>

              <tr className="border-t hover:bg-amber-50">

                <td className="px-4 py-4">HR</td>

                <td className="px-4 py-4">Employee records and HR documents</td>

                <td className="px-4 py-4">12</td>

                <td className="px-4 py-4">
                  <div className="flex gap-4">

                    <Link href={"/categories/1/edit"}>
                      <button className="text-yellow-500 hover:text-yellow-700">
                        <Pencil size={18} />
                      </button>
                    </Link>

                    <button className="text-red-500 hover:text-red-700">
                      <Trash2 size={18} />
                    </button>

                  </div>
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}