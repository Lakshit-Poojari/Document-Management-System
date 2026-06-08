import Link from "next/link";
import {
  Download,
  Pencil,
  Trash2,
  ArrowLeft,
} from "lucide-react";

export default function DocumentDetails() {
  return (
    <div className="min-h-screen bg-amber-50 py-10 px-6">

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">

        <div className="flex justify-between items-center mb-8">

          <h1 className="text-4xl font-bold text-amber-600">
            Document Details
          </h1>

          <Link
            href={"/document"}
            className="flex items-center gap-2 text-gray-600 hover:text-amber-600"
          >
            <ArrowLeft size={18} />
            Back
          </Link>

        </div>

        <div className="space-y-6">

          <div>
            <h2 className="font-semibold text-gray-500">
              Title
            </h2>

            <p className="text-lg">
              Employee Handbook
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-gray-500">
              Description
            </h2>

            <p>
              Company policies and employee guidelines.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-gray-500">
              Category
            </h2>

            <p>
              HR
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-gray-500">
              File Name
            </h2>

            <p>
              employee-handbook.pdf
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-gray-500">
              File Type
            </h2>

            <p>
              PDF
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-gray-500">
              File Size
            </h2>

            <p>
              2.4 MB
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-gray-500">
              Uploaded By
            </h2>

            <p>
              Admin
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-gray-500">
              Uploaded On
            </h2>

            <p>
              08-Jun-2026
            </p>
          </div>

        </div>

        <div className="flex gap-4 mt-10">

          <button className="flex items-center gap-2 px-5 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600">
            <Download size={18} />
            Download
          </button>

          <button className="flex items-center gap-2 px-5 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
            <Pencil size={18} />
            Edit
          </button>

          <button className="flex items-center gap-2 px-5 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600">
            <Trash2 size={18} />
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}