"use client";

import { Bars } from "react-loading-icons";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">

      <Bars
        fill="#f59e0b"
        width={80}
        height={80}
      />

      <h1 className="mt-8 text-3xl font-bold text-gray-800">
        Loading...
      </h1>

      <p className="mt-3 text-lg text-gray-500 text-center max-w-lg">
        Please wait while we prepare everything for you.
      </p>

      <div className="flex gap-2 mt-6">
        <span className="w-3 h-3 bg-amber-500 rounded-full animate-bounce"></span>

        <span
          className="w-3 h-3 bg-amber-500 rounded-full animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></span>

        <span
          className="w-3 h-3 bg-amber-500 rounded-full animate-bounce"
          style={{ animationDelay: "0.4s" }}
        ></span>
      </div>

      <p className="mt-8 text-sm text-gray-400">
        This may take a few moments...
      </p>

    </div>
  );
}