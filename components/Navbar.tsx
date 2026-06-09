"use client";

import { CircleUser } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);

  async function checkAuth() {
    const response = await fetch("/api/users/me", { credentials: "include" });
        setLoggedIn(response.ok);
        }

  useEffect(() => {
        checkAuth();
        }, []);

  const logout = async () => {
    await fetch("/api/users/logout", {
      method: "POST",
      credentials: "include",
    });

    window.location.href = "/login";
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        <Link
          href="/"
          className="text-3xl font-bold text-amber-600"
        >
          DMS
        </Link>

        <div className="flex gap-8">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/document">Documents</Link>
          <Link href="/categories">Categories</Link>
        </div>

        {loggedIn ? (
          <div className="flex items-center gap-4">

            <Link
              href="/profile"
              className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-amber-100"
            >
              <CircleUser size={20} />
              <span>Profile</span>
            </Link>

            <button
              onClick={logout}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Logout
            </button>

          </div>
        ) : (
          <div className="flex gap-4">

            <Link
              href="/login"
              className="px-4 py-2 border border-amber-500 rounded-lg hover:bg-amber-50"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600"
            >
              Register
            </Link>

          </div>
        )}

      </nav>
    </header>
  );
}