"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleLogin = async () => {
    const res = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    })

    const data = await res.json()

    if (res.ok) {
      // Save token and user info to localStorage
      localStorage.setItem("token", data.accessToken)
      localStorage.setItem("user", JSON.stringify(data))
      router.push("/home")
    } else {
      alert("Invalid username or password")
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-600">
      <div className="p-8 bg-white rounded shadow-md w-120 h-80">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">
          Login
        </h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="text-black w-full p-2 border rounded mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="text-black w-full p-2 border rounded mb-4"
        />

        <button
          onClick={handleLogin}
          className="w-full p-2 bg-blue-500 text-white rounded"
        >
          Login
        </button>
      </div>
    </div>
  )
}
