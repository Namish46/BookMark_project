"use client"
import { useEffect, useState } from "react"

export default function SettingsPage() {
  const [user, setUser] = useState<any>(null)
  const [bookmarks, setBookmarks] = useState<any[]>([])
  const [categories, setCategories] = useState<string[]>(["Work", "Personal", "Shopping"])

  // General settings state
  const [defaultCategory, setDefaultCategory] = useState("")
  const [defaultRating, setDefaultRating] = useState(5)
  const [appearance, setAppearance] = useState<"light" | "dark">("light")
  const [language, setLanguage] = useState("English")

  // Load user, bookmarks, and settings from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) setUser(JSON.parse(storedUser))

    const storedBookmarks = localStorage.getItem("bookmarks")
    if (storedBookmarks) setBookmarks(JSON.parse(storedBookmarks))

    const settings = localStorage.getItem("generalSettings")
    if (settings) {
      const parsed = JSON.parse(settings)
      setDefaultCategory(parsed.defaultCategory || "")
      setDefaultRating(parsed.defaultRating || 5)
      setAppearance(parsed.appearance || "light")
      setLanguage(parsed.language || "English")
    }
  }, [])

  if (!user) return <p>Loading user info...</p>

  // Save general settings
  const saveSettings = () => {
    const settings = { defaultCategory, defaultRating, appearance, language }
    localStorage.setItem("generalSettings", JSON.stringify(settings))
    alert("Settings saved!")
  }

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-xl font-bold">Settings</h1>

      {/* User Info */}
      <div className="border p-4 rounded bg-white shadow-sm space-y-1">
        <h2 className="font-semibold mb-2">User Info</h2>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>First Name: {user.firstName}</p>
        <p>Last Name: {user.lastName}</p>
      </div>

      {/* Bookmarks */}
      <div className="border p-4 rounded bg-white shadow-sm space-y-2">
        <h2 className="font-semibold mb-2">Bookmarks</h2>
        {bookmarks.length === 0 ? (
          <p>No bookmarks saved yet</p>
        ) : (
          <ul className="list-disc list-inside">
            {bookmarks.map((b, i) => (
              <li key={i}>{b.title || b.name}</li>
            ))}
          </ul>
        )}
      </div>

      {/* General Settings */}
      <div className="border p-4 rounded bg-white shadow-sm space-y-3">
        <h2 className="font-semibold mb-2">General Settings</h2>

        <div className="flex flex-col gap-2">
          <label>
            Default Category:
            <select
              value={defaultCategory}
              onChange={(e) => setDefaultCategory(e.target.value)}
              className="border p-2 rounded w-full mt-1"
            >
              <option value="">Select category</option>
              {categories.map((cat, i) => (
                <option key={i} value={cat}>{cat}</option>
              ))}
            </select>
          </label>

          <label>
            Default Rating:
            <input
              type="number"
              min={1}
              max={5}
              value={defaultRating}
              onChange={(e) => setDefaultRating(Number(e.target.value))}
              className="border p-2 rounded w-full mt-1"
            />
          </label>

          <label>
            Appearance Mode:
            <select
              value={appearance}
              onChange={(e) => setAppearance(e.target.value as "light" | "dark")}
              className="border p-2 rounded w-full mt-1"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </label>

          <label>
            Language:
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="border p-2 rounded w-full mt-1"
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
            </select>
          </label>
        </div>

        <button
          onClick={saveSettings}
          className="px-4 py-2 bg-blue-500 text-white rounded mt-2"
        >
          Save Settings
        </button>
      </div>
    </div>
  )
}
