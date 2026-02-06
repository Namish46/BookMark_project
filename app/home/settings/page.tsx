"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SettingsPage() {
  const [user,setUser]=useState<any>(null);
  const [bookmarks,setBookmarks]=useState<any[]>([]);
  const [categories,setCategories]=useState<string[]>(["Work","Personal","Shopping"]);
  const [defaultCategory,setDefaultCategory]=useState("");
  const [defaultRating,setDefaultRating]=useState(5);
  const [appearance,setAppearance]=useState<"light"|"dark">("dark");
  const [language,setLanguage]=useState("English");
  const router = useRouter();

  useEffect(()=>{
    const storedUser=localStorage.getItem("user");
    if(storedUser) setUser(JSON.parse(storedUser));
    const storedBookmarks=localStorage.getItem("bookmarks");
    if(storedBookmarks) setBookmarks(JSON.parse(storedBookmarks));
    const settings=localStorage.getItem("generalSettings");
    if(settings){
      const parsed=JSON.parse(settings);
      setDefaultCategory(parsed.defaultCategory||"");
      setDefaultRating(parsed.defaultRating||5);
      setAppearance(parsed.appearance||"dark");
      setLanguage(parsed.language||"English");
    }
  },[]);

  if(!user) return <p className="text-white p-4">Loading user info...</p>;

  const saveSettings=()=>{
    localStorage.setItem("generalSettings",JSON.stringify({defaultCategory,defaultRating,appearance,language}));
    alert("Settings saved!");
  };

  const handleLogout=()=>{
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    router.push("/");
  };

  return (
    <div className="min-h-screen p-4 bg-black text-white space-y-6">
      <h1 className="text-2xl font-bold">Settings</h1>

      <div className="p-4 rounded bg-gray-900 space-y-2">
        <h2 className="font-semibold">User Info</h2>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>First Name: {user.firstName}</p>
        <p>Last Name: {user.lastName}</p>
        <button onClick={handleLogout} className="mt-2 px-4 py-2 bg-red-500 rounded text-white hover:bg-red-600 transition">Logout</button>
      </div>

      <div className="p-4 rounded bg-gray-900 space-y-2">
        <h2 className="font-semibold">Bookmarks</h2>
        {bookmarks.length===0 ? <p>No bookmarks saved yet</p> :
          <ul className="list-disc list-inside">
            {bookmarks.map((b,i)=><li key={i}>{b.title||b.name}</li>)}
          </ul>
        }
      </div>

      <div className="p-4 rounded bg-gray-900 space-y-3">
        <h2 className="font-semibold">General Settings</h2>
        <div className="flex flex-col gap-2">
          <label>
            Default Category:
            <select value={defaultCategory} onChange={e=>setDefaultCategory(e.target.value)} className="w-full p-2 mt-1 rounded bg-gray-800 border border-gray-700 text-white">
              <option value="">Select category</option>
              {categories.map((cat,i)=><option key={i} value={cat}>{cat}</option>)}
            </select>
          </label>

          <label>
            Default Rating:
            <input type="number" min={1} max={5} value={defaultRating} onChange={e=>setDefaultRating(Number(e.target.value))} className="w-full p-2 mt-1 rounded bg-gray-800 border border-gray-700 text-white"/>
          </label>

          <label>
            Appearance Mode:
            <select value={appearance} onChange={e=>setAppearance(e.target.value as "light"|"dark")} className="w-full p-2 mt-1 rounded bg-gray-800 border border-gray-700 text-white">
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </label>

          <label>
            Language:
            <select value={language} onChange={e=>setLanguage(e.target.value)} className="w-full p-2 mt-1 rounded bg-gray-800 border border-gray-700 text-white">
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
            </select>
          </label>
        </div>

        <button onClick={saveSettings} className="px-4 py-2 bg-blue-500 rounded text-white hover:bg-blue-600 transition mt-2">Save Settings</button>
      </div>
    </div>
  );
}
