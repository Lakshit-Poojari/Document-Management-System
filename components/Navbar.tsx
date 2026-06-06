import Link from "next/link"


export default function Navbar() {
  return (
    <>
        <header className="sticky top-0 z-50 bg-white  shadow-md  border-b border-gray-200 ">
            <nav className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

                <div>
                    <Link href="/" className="text-3xl font-bold text-amber-600 ">DMS</Link>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-8">

                    <Link href="/" className="hover:text-amber-600 transition focus:underline">Home</Link>

                    <Link href="/about" className="hover:text-amber-600 transition focus:underline">About</Link>

                    <Link href="/document" className="hover:text-amber-600 transition focus:underline">Documents</Link>

                    <Link href="/categories" className="hover:text-amber-600 transition focus:underline">Categories</Link>

                    <Link href="/profile" className="hover:text-amber-600 transition focus:underline">Profile</Link>

                </div>

                {/* Authentication Buttons */}
                <div className="flex gap-4">

                    <Link href="/login" className="px-4 py-2 border border-amber-500 rounded-lg hover:bg-amber-50  ">Login</Link>

                    <Link href="/register" className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600">Register</Link>

                </div>



            </nav>
        </header>
  
    </>
    )
}