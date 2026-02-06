"use client";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";

function HomePage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState<"grid" | "list">("grid");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      });
  }, []);

  const sortByRating = () => setProducts([...products].sort((a, b) => b.rating - a.rating));
  const deleteProduct = (id: number) => setProducts(products.filter((p) => p.id !== id));
  if (loading) return <p className="p-6">Loading bookmarks...</p>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Bookmarks</h1>
        <div className="flex gap-2">
          <button onClick={sortByRating} className="border px-3 py-1 rounded">Sort by Rating</button>
          <button onClick={() => setView("grid")} className={`border px-3 py-1 rounded ${view==="grid"?"bg-blue-500 text-white":""}`}>Grid</button>
          <button onClick={() => setView("list")} className={`border px-3 py-1 rounded ${view==="list"?"bg-blue-500 text-white":""}`}>List</button>
        </div>
      </div>
      <div className={view==="grid"?"grid grid-cols-1 md:grid-cols-3 gap-4":"flex flex-col gap-4"}>
        {products.map((item) => (
          <div key={item.id} className={view==="grid"?"border rounded-xl p-4 bg-black":"border rounded-xl p-4 bg-black flex gap-4 items-center"}>
            <img src={item.thumbnail} alt={item.title} className={view==="grid"?"w-full h-40 object-cover rounded":"w-32 h-32 object-cover rounded"} />
            <div className={view==="grid"?"":"flex-1"}>
              <h2 className="font-semibold mt-2">{item.title}</h2>
              <p className="text-sm text-white-500">{item.description}</p>
              <div className="flex mt-1">{Array.from({length:5}).map((_,i)=><Star key={i} size={16} className={`${i<Math.round(item.rating)?"text-yellow-400":"text-gray-500"}`}/> )}</div>
              <p className="font-semibold text-xs text-white-500 mt-1">Category: {item.category}</p>
              <button onClick={()=>deleteProduct(item.id)} className="mt-2 px-2 py-1 bg-sky-500/50 text-white rounded">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
