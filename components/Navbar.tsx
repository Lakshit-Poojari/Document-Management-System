"use client";

import { CircleUser, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  async function checkAuth() {
    const response = await fetch("/api/users/me", {credentials: "include",});

    setLoggedIn(response.ok);
  }

  useEffect(() => {
    checkAuth();
  }, []);

  const logout = async () => {
    await fetch("/api/users/logout", { method: "POST", credentials: "include",});

    window.location.href = "/login";
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">

      <nav className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex justify-between items-center">

          {/* Logo */}

          <Link href="/" className="text-3xl font-bold text-amber-600">DMS</Link>

          {/* Desktop Navigation */}

          <div className="hidden md:flex items-center gap-8">

            <Link href="/" className="hover:text-amber-600">Home</Link>

            <Link href="/about" className="hover:text-amber-600">About</Link>

            <Link href="/document" className="hover:text-amber-600">Documents</Link>

            <Link href="/categories" className="hover:text-amber-600">Categories</Link>

          </div>

          {/* Desktop Auth */}

          <div className="hidden md:flex items-center gap-4">

            {loggedIn ? (
              <>
                <Link href="/profile" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-amber-100">
                  <CircleUser size={20} />
                  <span>Profile</span>
                </Link>

                <button onClick={logout} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="px-4 py-2 border border-amber-500 rounded-lg hover:bg-amber-50">Login</Link>

                <Link href="/register" className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600">
                  Register
                </Link>
              </>
            )}

          </div>

          {/* Mobile Menu Button */}

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* Mobile Menu */}

        {isOpen && (

          <div className="md:hidden flex flex-col gap-4 mt-6 pb-4 border-t pt-4">

            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>

            <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>

            <Link href="/document" onClick={() => setIsOpen(false)}>Documents</Link>

            <Link href="/categories" onClick={() => setIsOpen(false)}>Categories</Link>

            {loggedIn ? (
              <>
                <Link href="/profile" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                  <CircleUser size={20} />
                  Profile
                </Link>

                <button onClick={logout} className="bg-red-500 text-white rounded-lg py-2">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login" onClick={() => setIsOpen(false)} className="border border-amber-500 rounded-lg py-2 text-center" >
                  Login
                </Link>

                <Link href="/register" onClick={() => setIsOpen(false)} className="bg-amber-500 text-white rounded-lg py-2 text-center">
                  Register
                </Link>
              </>
            )}

          </div>
        )}
      </nav>
    </header>
  );
}