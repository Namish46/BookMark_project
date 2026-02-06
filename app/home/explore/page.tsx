"use client";
import { useEffect, useState } from "react";
type Product = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
};

function ExplorePage(){
  const [items,setItems] =useState<Product[]>([]);
  const [loading,setLoading]=useState(true);
  const [saved,setSaved]=useState<number[]>([]);
  useEffect(()=>{
    fetch("https://dummyjson.com/products")
      .then((res)=>res.json())
      .then((data)=>{
        const shuffled = data.products.sort(() => Math.random() - 0.5);
        setItems(shuffled);
        setLoading(false);
      });
    const savedData = localStorage.getItem("savedBookmarks");
    if (savedData) setSaved(JSON.parse(savedData));
  },[]);

  const handleSave =(id: number) => {
    if (!saved.includes(id)) {
      const newSaved = [...saved, id];
      setSaved(newSaved);
      localStorage.setItem("savedBookmarks", JSON.stringify(newSaved));
      alert("Bookmark saved!");
    }};
  if (loading) return <p>Loading explore feed...</p>;
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Explore Bookmarks</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item.id} className="border rounded-lg p-4 bg-black shadow hover:shadow-md">
            <img src={item.thumbnail} alt={item.title} className="w-full h-40 object-cover rounded mb-2"/>
            <h2 className="font-semibold">{item.title}</h2>
            <p className="text-sm text-white-600">{item.description}</p>
            <button onClick={() => handleSave(item.id)} className="mt-2 px-3 py-1 bg-blue-500 text-white rounded">
              {saved.includes(item.id) ? "Saved" : "Save Bookmark"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ExplorePage;