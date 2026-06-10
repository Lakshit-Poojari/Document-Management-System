"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Register () {

    const [form, setform] = useState(
        {
            full_name:"",
            email: "",
            password_hash: "",
            role: ""
        }
    )
    const [message, setmessage] = useState("")

    const router = useRouter()

    const handleSubmit = async(e: React.FormEvent) => {
        
        e.preventDefault();
        try {
                const response = await fetch("http://localhost:3000/api/users/register", 
                    { 
                        method: "POST", 
                        headers: { "Content-Type": "application/json",},
                        body: JSON.stringify(form),
                    }
                );

                const data = await response.json()

                if (response.ok) {
                    setmessage("Registration successful!");

                    setTimeout(() => {
                        router.push("/login");
                    }, 1500);
                }else {
                    setmessage(data.message || "Registration failed");

                }
        } catch (error) {
            console.error(error);
            setmessage("Something went wrong");
        }
    }

    const handleChange = (e: React.ChangeEvent <HTMLInputElement | HTMLSelectElement>) => {
        setform({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    return(
        <>
            <div className="min-h-screen bg-amber-50 flex items-center justify-center ">
                <div className="w-80 max-w-md p-8 rounded-2xl shadow-2xl bg-white">
                    <p className="text-3xl text-amber-300 font-bold text-center mb-6">Register</p>
                <form onSubmit={handleSubmit}>
                    <label>Full Name</label>
                    <br />
                    <input type="text" value={form.full_name} name="full_name" onChange={handleChange} required
                    className="w-full h-10 rounded-xl border-2  border-amber-200 focus:outline-none focus:border-amber-300"/>
                    <br />
                    <label>Email</label>
                    <br />
                    <input type="text" value={form.email} name="email" onChange={handleChange} required
                    className="w-full h-10 rounded-xl border-2  border-amber-200 focus:outline-none focus:border-amber-300"/>
                    <br />
                    <label>Role</label>
                    <select name="role" value={form.role} onChange={handleChange} required
                    className="w-full h-10 p-2 rounded-xl border-2 border-amber-200 focus:outline-none focus:border-amber-400">
                        <option value="">Select Role</option>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                    </select>
                    <br />
                    <label>Password</label>
                    <br />
                    <input type="password" value={form.password_hash} name="password_hash" onChange={handleChange} required
                    className="w-full h-10 rounded-xl border-2 border-amber-200 focus:outline-none focus:border-amber-300"/>
                    <br />
                    
                        <p className={`text-lg text-center mt-4 ${ message === "Registration successful!"
                            ? "text-green-500" : "text-red-500" }`} >
                            {message}
                        </p>
                    <br />
                    
                        <button type="submit" className="bg-amber-200 w-20 h-10 rounded-xl hover:bg-amber-300">Register</button>
                   
                </form>
                </div>
            </div>
        </>
    )
}

// Suchit@1234
// suchit@gmail.com

// "email": "lakshit@gmail.com",
//   "password": "123456",