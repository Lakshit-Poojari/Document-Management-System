"use client";

import Loading from "@/app/loading";
import { useEffect, useState } from "react";

type User = {
  user_id: number;
  full_name: string;
  email: string;
  role: string;
  created_at: string;
};

export default function Profile() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    const response = await fetch("/api/users/profile", {
      credentials: "include",
    });

    if (response.ok) {
      const data = await response.json();
      setUser(data);

      console.log(data);

    }
  };

  if (!user) {
    return (
      <Loading/>
    );
  }

  const initials = user.full_name
    .split(" ")
    .map((name) => name[0])
    .join("")
    .toUpperCase();

  const joinedDate = new Date(user.created_at).toLocaleDateString(
    "en-IN",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );
  return (
    <div className="min-h-screen bg-amber-50 py-12 px-6">

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-10">

        <div className="flex flex-col items-center">

          <div className="w-32 h-32 rounded-full bg-amber-500 flex items-center justify-center text-5xl text-white font-bold">
            {initials}
          </div>

          <h1 className="mt-6 text-4xl font-bold text-gray-800">
            {user.full_name}
          </h1>

          <p className="text-lg text-gray-500 mt-2">
            {user.role}
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">

          <div className="bg-amber-100 rounded-xl p-6 shadow">

            <h2 className="text-xl font-semibold text-amber-700 mb-4">
              Personal Information
            </h2>

            <div className="space-y-3">

              <p>
                <span className="font-semibold">
                  Full Name:
                </span>{" "}
                {user.full_name}
              </p>

              <p>
                <span className="font-semibold">
                  Email:
                </span>{" "}
                {user.email}
              </p>

              <p>
                <span className="font-semibold">
                  Role:
                </span>{" "}
                {user.role}
              </p>

            </div>

          </div>

          <div className="bg-amber-100 rounded-xl p-6 shadow">

            <h2 className="text-xl font-semibold text-amber-700 mb-4">
              Account Summary
            </h2>

            <div className="space-y-3">

              <p>
                📄 Documents Uploaded: <strong>25</strong>
              </p>

              <p>
                📁 Categories Created: <strong></strong>
              </p>

              <p>
                📅 Joined: <strong>{joinedDate}</strong>
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}