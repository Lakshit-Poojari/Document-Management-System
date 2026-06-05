"use client"

import Link from "next/link"

export default function register () {
    return(
        <>
            <div className="min-h-screen flex items-center justify-center ">
                <div className="w-80 max-w-md p-8 rounded-2xl shadow-2xl bg-amber-50">
                    <p className="text-3xl text-amber-300 font-bold text-center mb-6">Register</p>
                <form>
                    <label>Full Name</label>
                    <br />
                    <input type="text" className="w-full h-10 rounded-xl border-2  border-amber-200 focus:outline-none focus:border-amber-300"/>
                    <br />
                    <label>Email</label>
                    <br />
                    <input type="text" className="w-full h-10 rounded-xl border-2  border-amber-200 focus:outline-none focus:border-amber-300"/>
                    <br />
                    <label>Role</label>
                    <select className="w-full h-10 p-2 rounded-xl border-2 border-amber-200 focus:outline-none focus:border-amber-400">
                        <option value="">Select Role</option>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                    </select>
                    <br />
                    <label>Password</label>
                    <br />
                    <input type="password" className="w-full h-10 rounded-xl border-2 border-amber-200 focus:outline-none focus:border-amber-300"/>
                    <br />
                    <br />
                    <Link href={"/login"}>
                        <button  className="bg-amber-200 w-20 h-10 rounded-xl hover:bg-amber-300">Register</button>
                    </Link>
                </form>
                </div>
            </div>
        </>
    )
}