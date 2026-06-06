"use client";

import Image from "next/image";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">

      <Image
        src="/images/error.png"
        alt="Error"
        width={600}
        height={600}
        priority
      />

      <h1 className="text-4xl font-bold mt-6">
        Something Went Wrong
      </h1>

      <p className="text-gray-600 mt-3 text-center max-w-md">
        {error.message}
      </p>

      <button
        onClick={reset}
        className="mt-6 px-6 py-3 rounded-lg bg-amber-500 text-white hover:bg-amber-600 transition"
      >
        Try Again
      </button>

    </div>
  );
}