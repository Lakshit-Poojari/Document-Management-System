export default function CreateDocument() {
  return (
    <div className="min-h-screen bg-amber-50 py-10 px-6">

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-amber-600 mb-2">
          Create Document
        </h1>

        <p className="text-gray-600 mb-8">
          Upload and organize your documents securely.
        </p>

        <form className="space-y-6">

          <div>
            <label className="block mb-2 font-medium">Title *</label>

            <input type="text" placeholder="Enter document title" className="w-full px-4 py-3 border rounded-lg"/>
          </div>

          <div>
            <label className="block mb-2 font-medium">Description</label>

            <textarea rows={4} placeholder="Enter description" className="w-full px-4 py-3 border rounded-lg"/>
          </div>

          <div>
            <label className="block mb-2 font-medium">Category *</label>

            <select className="w-full px-4 py-3 border rounded-lg">
              <option>Select Category</option>
              <option>HR</option>
              <option>Finance</option>
              <option>Reports</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">Upload File *</label>

            <input type="file" className="w-full px-4 py-3 border rounded-lg" />
          </div>

          <div className="flex gap-4">

            <button type="submit" className="px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600">
              Upload Document
            </button>

            <button type="button" className="px-6 py-3 border rounded-lg">
              Cancel
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}