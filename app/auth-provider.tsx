"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("token")

    // allow login page without token
    if (window.location.pathname !== "/" && !token) {
      router.push("/") // redirect to login
    } else {
      setLoading(false)
    }
  }, [router])

  if (loading) return <div className="flex justify-center items-center h-screen text-black">Loading...</div>

  return <>{children}</>
}
