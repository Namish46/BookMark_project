"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState("grid");

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=12")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      });
  }, []);

  const sortByRating = () => {
    const sorted = [...products].sort((a, b) => b.rating - a.rating);
    setProducts(sorted);
  };

  if (loading) {
    return <p className="p-6">Loading bookmarks...</p>;
  }

  return (
    <div className="p-6">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Bookmarks</h1>

        <div className="flex gap-2">
          <button onClick={sortByRating} className="border px-3 py-1 rounded">
            Sort by Rating
          </button>

          <button onClick={() => setView("grid")} className="border px-3 py-1 rounded">
            Grid
          </button>

          <button onClick={() => setView("list")} className="border px-3 py-1 rounded">
            List
          </button>
        </div>
      </div>

      {/* PRODUCTS */}
      <div
        className={
          view === "grid"
            ? "grid grid-cols-1 md:grid-cols-3 gap-4"
            : "flex flex-col gap-4"
        }
      >
        {products.map((item) => (
          <div key={item.id} className="border rounded-xl p-4 bg-white">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-40 object-cover rounded"
            />

            <h2 className="font-semibold mt-2">{item.title}</h2>

            <p className="text-sm text-gray-600">
              {item.description.slice(0, 80)}...
            </p>

            <p className="mt-1 text-sm">
              {"⭐".repeat(Math.round(item.rating))}
            </p>

            <p className="text-xs text-gray-500">
              Category: {item.category}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
