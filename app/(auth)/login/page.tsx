"use client"

import Link from "next/link"

export default function login () {
    return(
        <>
            <div className="min-h-screen flex items-center justify-center ">
                <div className="w-80 max-w-md p-8 rounded-2xl shadow-2xl bg-amber-50">
                    <p className="text-3xl text-amber-300 font-bold text-center mb-6">Login</p>
                <form>
                    <label>Email</label>
                    <br />
                    <input type="text" className="w-full h-10 rounded-xl border-2  border-amber-200 focus:outline-none focus:border-amber-300"/>
                    <br />
                    <label>Password</label>
                    <br />
                    <input type="password" className="w-full h-10 rounded-xl border-2 border-amber-200 focus:outline-none focus:border-amber-300"/>
                    <br />
                    <Link href={"/register"}> <p className=" text-amber-400 hover:text-amber-500">New User Regiter yourself</p></Link>
                    <br />
                    <Link href={"/"}>
                        <button className="bg-amber-200 w-20 h-10 rounded-xl hover:bg-amber-300">Login</button>
                    </Link>
                </form>
                </div>
            </div>
        </>
    )
}