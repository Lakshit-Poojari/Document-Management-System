import Link from "next/link";

export default function EditDocument() {
  return (
    <div className="min-h-screen bg-amber-50  py-10 px-6">

      <div className="max-w-3xl mx-auto bg-white  rounded-2xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-amber-600  mb-2">
          Edit Document
        </h1>

        <p className="text-gray-600  mb-8">
          Update the document details and upload a new file if needed.
        </p>

        <form className="space-y-6">

          <div>
            <label className="block text-lg font-medium mb-2">Title <span className="text-red-500">*</span></label>

            <input type="text"
              defaultValue="Employee Handbook"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg
              focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          <div>
            <label className="block text-lg font-medium mb-2">
              Description
            </label>

            <textarea rows={4}
              defaultValue="Company policies and employee guidelines."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg
              resize-none focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          <div>
            <label className="block text-lg font-medium mb-2"> Category <span className="text-red-500">*</span></label>

            <select defaultValue="HR"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg
              focus:outline-none focus:ring-2 focus:ring-amber-400">
              <option>HR</option>
              <option>Finance</option>
              <option>Reports</option>
            </select>
          </div>

          <div>
            <label className="block text-lg font-medium mb-2">Current File</label>

            <div className="px-4 py-3 bg-gray-100 rounded-lg">employee-handbook.pdf
            </div>
          </div>

          <div>
            <label className="block text-lg font-medium mb-2">
              Replace File
            </label>

            <input
              type="file"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="flex flex-wrap gap-4 pt-4">

            <button
              type="submit"
              className="px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition"
            >
              Update Document
            </button>

            <button
              type="reset"
              className="px-6 py-3 border border-gray-300 rounded-lg
              hover:bg-gray-100transition"
            >
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