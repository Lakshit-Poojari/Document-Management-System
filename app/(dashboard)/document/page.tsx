import {
  Eye,
  Pencil,
  Download,
  Trash2,
  FolderOpen,
} from "lucide-react";
import Link from "next/link";

export default function Document() {
    return(
        <div className="min-h-screen bg-amber-50 ">

        <div className="max-w-7xl mx-auto">

            <h1 className="text-5xl font-bold text-amber-600">
            Documents
            </h1>

            <p className="text-gray-600  mt-2">
            Manage and organize your documents securely.
            </p>

            <div className="flex justify-between mt-8">

            <input
                type="text"
                placeholder="Search document..."
            />

            <Link href={"/document/create"}><button>
                Upload Document
            </button></Link>

            </div>

            <div className="overflow-hidden rounded-2xl border border-gray-300 shadow-lg">

                <table className="w-full">

                    <thead className="bg-amber-100">
                        <tr>
                            <th className="px-4 py-3 border border-gray-300 text-left">Title</th>
                            <th className="px-4 py-3 border border-gray-300 text-left">Category</th>
                            <th className="px-4 py-3 border border-gray-300 text-left">Size</th>
                            <th className="px-4 py-3 border border-gray-300 text-left">Date</th>
                            <th className="px-4 py-3 border border-gray-300 text-left">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        
                        <tr className="hover:bg-amber-50 transition">
                            <td className="px-4 py-3 border border-gray-300">Resume.pdf</td>
                            <td className="px-4 py-3 border border-gray-300">HR</td>
                            <td className="px-4 py-3 border border-gray-300">2 MB</td>
                            <td className="px-4 py-3 border border-gray-300">06-Jun-2026</td>

                            <td className="px-4 py-3 border border-gray-300">
                                <div className="flex gap-4">

                                    <div className="relative group">
                                        <Link href={"/document/1"}>        
                                            <button className="p-2 rounded-lg text-blue-500 hover:bg-blue-100 hover:text-blue-700 transition">
                                                <Eye size={18} />
                                            </button>
                                        </Link>

                                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap
                                        bg-blue-600 text-white text-xs px-3 py-1 rounded-md
                                        opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none">
                                        View Details
                                        </span>
                                    </div>

                                    <div className="relative group">
                                        <button className="p-2 rounded-lg text-purple-500 hover:bg-purple-100 hover:text-purple-700 transition">
                                            <FolderOpen size={18} />
                                        </button>

                                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap
                                        bg-purple-600 text-white text-xs px-3 py-1 rounded-md
                                        opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none">
                                        Open Document
                                        </span>
                                    </div>

                                    <div className="relative group">
                                        
                                        <button className="p-2 rounded-lg text-amber-500 hover:bg-amber-100 hover:text-amber-700 transition">
                                            <Pencil size={18} />
                                        </button>
                                        

                                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap
                                        bg-amber-500 text-white text-xs px-3 py-1 rounded-md
                                        opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none">
                                        Edit
                                        </span>
                                    </div>

                                    <div className="relative group">
                                        <button className="p-2 rounded-lg text-green-500 hover:bg-green-100 hover:text-green-700 transition">
                                            <Download size={18} />
                                        </button>

                                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap
                                        bg-green-600 text-white text-xs px-3 py-1 rounded-md
                                        opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none">
                                        Download
                                        </span>
                                    </div>

                                    <div className="relative group">
                                        <button className="p-2 rounded-lg text-red-500 hover:bg-red-100 hover:text-red-700 transition">
                                            <Trash2 size={18} />
                                        </button>

                                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap
                                        bg-red-600 text-white text-xs px-3 py-1 rounded-md
                                        opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none">
                                        Delete
                                        </span>
                                    </div>

                                </div>
                            </td>
                        </tr>

                    </tbody>

                </table>

            </div>

        </div>

        </div>
    )
}