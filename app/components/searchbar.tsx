"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
function SearchBar(){
  const [state,setState]=useState("");
  const router=useRouter();
  return (
    <div className="flex items-center bg-white-700 h-20 bg-gray-800 border border-gray-700 text-white">
      <input type="text" placeholder="Search anything..." value={state} onChange={(e) => setState(e.target.value)} className="border p-2 bg-black rounded flex-1"/>
      <button onClick={()=>router.push("/home/addBookmark")} className="px-4 py-2 bg-blue-500 text-white rounded">+Add Bookmark</button>
    </div>
  );
}
export default SearchBar;
