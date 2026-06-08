import {
  Eye,
  Pencil,
  Download,
  Trash2,
} from "lucide-react";

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

            <button>
                Upload Document
            </button>

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

                                    <button className="text-blue-500 hover:text-blue-700">
                                    <Eye size={18} />
                                    </button>

                                    <button className="text-yellow-500 hover:text-yellow-700">
                                    <Pencil size={18} />
                                    </button>

                                    <button className="text-green-500 hover:text-green-700">
                                    <Download size={18} />
                                    </button>

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
    )
}