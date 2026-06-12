"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Login () {

    const [form, setform] = useState(
        {
            email: "",
            password_hash: "",            
        }
    )
    const [message, setmessage] = useState("")
    const router = useRouter()

    const handleSubmit = async(e:React.FormEvent) => {
        e.preventDefault();
        try {

            const body = {
                email: form.email.trim().toLowerCase(),
                password_hash: form.password_hash,
            };

            const response = await fetch("/api/users/login", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });

            const data = await response.json();

            if (response.ok) {

                setmessage("Login successful!");

                window.location.href = "/document";
            } else {
            setmessage(data.message || "Invalid email or password");
            }


        } catch (error) {
            console.error(error);
            setmessage("Something went wrong");
        }
    }

    const handleChange = (e:React.ChangeEvent <HTMLInputElement | HTMLSelectElement>) => {
        setform(
            {
                ...form,
                [e.target.name]: e.target.value,
            }
        )
    }
    return(
        <>
            <div className="min-h-screen flex items-center justify-center bg-amber-50">
                <div className="w-80 max-w-md p-8 rounded-2xl shadow-2xl bg-white">
                    <p className="text-3xl text-amber-300 font-bold text-center mb-6">Login</p>
                    <form onSubmit={handleSubmit}>
                        <label>Email</label>
                        <br />
                        <input type="text" name="email" value={form.email} onChange={handleChange} required
                            className="w-full h-10 rounded-xl border-2  border-amber-200 focus:outline-none focus:border-amber-300"/>
                        <br />
                        <label>Password</label>
                        <br />
                        <input type="password" name="password_hash" value={form.password_hash} onChange={handleChange} required
                            className="w-full h-10 rounded-xl border-2 border-amber-200 focus:outline-none focus:border-amber-300"/>
                        <br />
                        <Link href={"/register"}> 
                            <p className=" text-amber-400 hover:text-amber-500">New User Regiter yourself</p>
                        </Link>
                        <br />

                        <p  className={`text-lg text-center mt-4 ${message === "Login successful!" ? "text-green-500": "text-red-500" }`}>
                            {message}
                            </p>


                        <button type="submit" className="bg-amber-200 w-20 h-10 rounded-xl hover:bg-amber-300">Login</button>
                        
                    </form>
                </div>
            </div>
        </>
    )
}