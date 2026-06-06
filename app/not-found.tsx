import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gray-50">

      <Image
        src="/images/notFound.png"
        alt="404 Not Found"
        width={600}
        height={600}
        priority
      />

      <h1 className="text-6xl font-bold text-amber-600 mt-6">
        404
      </h1>

      <h2 className="text-3xl font-semibold mt-2">
        Page Not Found
      </h2>

      <p className="text-gray-600 text-center max-w-lg mt-4">
        The page you are looking for might have been removed,
        renamed, or is temporarily unavailable.
      </p>

      <Link
        href="/"
        className="mt-8 px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition"
      >
        Go Back Home
      </Link>

    </div>
  );
}