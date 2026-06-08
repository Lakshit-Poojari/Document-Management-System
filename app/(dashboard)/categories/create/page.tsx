import Link from "next/link";

export default function CreateCategory() {
  return (
    <div className="min-h-screen bg-amber-50 py-10 px-6">

      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-amber-600 mb-2">
          Create Category
        </h1>

        <p className="text-gray-600 mb-8">
          Create a new category to organize your documents efficiently.
        </p>

        <form className="space-y-6">

          <div>
            <label className="block text-lg font-medium mb-2">
              Category Name <span className="text-red-500">*</span>
            </label>

            <input type="text" placeholder="Enter category name" 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-amber-400"/>
          </div>

          <div>
            <label className="block text-lg font-medium mb-2">
              Description
            </label>

            <textarea rows={4} placeholder="Enter category description"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none 
              focus:outline-none focus:ring-2 focus:ring-amber-400 "></textarea>
          </div>

          <div className="flex gap-4 pt-4">

            <button type="submit" className="px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition" >
              Create Category
            </button>

            <button type="reset" className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition" >Reset</button>

            <Link href={"/categories"}>
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