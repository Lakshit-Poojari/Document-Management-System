export default function Profile() {
    return(
    <div className="min-h-screen bg-amber-50 dark:bg-gray-900 py-12 px-6">

      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10">

        <div className="flex flex-col items-center">

          <div className="w-32 h-32 rounded-full bg-amber-500 flex items-center justify-center text-5xl text-white font-bold">
            LP
          </div>

          <h1 className="mt-6 text-4xl font-bold text-gray-800 dark:text-white">
            Lakshit Poojari
          </h1>

          <p className="text-lg text-gray-500 dark:text-gray-300 mt-2">
            Administrator
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">

          <div className="bg-amber-100 dark:bg-gray-700 rounded-xl p-6 shadow">

            <h2 className="text-xl font-semibold text-amber-700 dark:text-amber-400 mb-4">
              Personal Information
            </h2>

            <div className="space-y-3">

              <p>
                <span className="font-semibold">
                  Full Name:
                </span>{" "}
                Lakshit Poojari
              </p>

              <p>
                <span className="font-semibold">
                  Email:
                </span>{" "}
                lakshit@example.com
              </p>

              <p>
                <span className="font-semibold">
                  Role:
                </span>{" "}
                ADMIN
              </p>

            </div>

          </div>

          <div className="bg-amber-100 dark:bg-gray-700 rounded-xl p-6 shadow">

            <h2 className="text-xl font-semibold text-amber-700 dark:text-amber-400 mb-4">
              Account Summary
            </h2>

            <div className="space-y-3">

              <p>
                📄 Documents Uploaded: <strong>25</strong>
              </p>

              <p>
                📁 Categories Created: <strong>8</strong>
              </p>

              <p>
                📅 Joined: <strong>June 2026</strong>
              </p>

            </div>

          </div>

        </div>

        <div className="flex justify-center gap-6 mt-12">

          <button className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
            Logout
          </button>

        </div>

      </div>

    </div>
    )
}