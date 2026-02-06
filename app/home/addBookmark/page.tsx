"use client";
import { useState } from "react";
export default function AddBookmarkPage() {
  const [title,setTitle]=useState("");
  const [url,setUrl]=useState("");
  const [description,setDescription]=useState("");
  const [category,setCategory]=useState("");
  const [rating,setRating]=useState(1);
  const [bookmarks,setBookmarks]=useState<any[]>([]);

  const handleAdd=()=>{
    if (!title || !url){ 
      return alert("Title and URL are required");
    }
    const newBookmark ={ title,url,description,category,rating};
    setBookmarks([...bookmarks,newBookmark]);
    setTitle("");
    setUrl("");
    setDescription("");
    setCategory("");
    setRating(1);
  };
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Add New Bookmark</h1>
      <div className="flex flex-col gap-3 mb-4">
      <input type="text" placeholder="Bookmark Title" value={title} onChange={e =>setTitle(e.target.value)} className="border p-2 rounded"/>
      <input type="text" placeholder="Bookmark URL" value={url} onChange={e =>setUrl(e.target.value)} className="border p-2 rounded"/>
      <textarea placeholder="Description" value={description} onChange={e =>setDescription(e.target.value)} className="border p-2 rounded"/>
      <input type="text" placeholder="Category" value={category} onChange={e =>setCategory(e.target.value)}className="border p-2 rounded"/>
      Rating:
      <input type="number" min={1} max={5} placeholder="Rating" value={rating} onChange={e =>setRating(Number(e.target.value))} className="border p-2 rounded w-24"/>
        <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-2 rounded">Add Bookmark</button>
      </div>

      <h2 className="text-lg font-semibold mb-2">Bookmarks Added:</h2>
      <ul>
        {bookmarks.map((bm, i) => (
          <li key={i} className="border p-2 mb-2 rounded">
            <p className="font-semibold">{bm.title}</p>
            <p className="text-sm">{bm.description}</p>
            <p className="text-xs text-gray-500">
              URL: <a href={bm.url} target="_blank">{bm.url}</a> | Category: {bm.category} | Rating: {bm.rating}⭐
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
