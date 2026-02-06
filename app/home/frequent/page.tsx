"use client";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";

type Product ={
  id: number;
  title: string;
  description: string;
  rating: number;
  thumbnail: string;
};

export default function FrequentPage() {
  const [items,setItems] =useState<Product[]>([]);
  const [loading,setLoading] =useState(true);

  useEffect(()=>{
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data)=>{
        const sorted = data.products.sort(
          (a: Product, b: Product) => b.rating - a.rating
        );
        setItems(sorted);
        setLoading(false);
      });
  }, []);

  if (loading) 
    {
      return <p>Loading frequent bookmarks...</p>;
    }

  return(
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Frequent Bookmarks</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((item)=>(
          <div key={item.id} className="border rounded-lg p-4 bg-black shadow hover:shadow-md">
            <img src={item.thumbnail} alt={item.title} className="w-full h-40 object-cover rounded mb-2"/>
            <h2 className="font-semibold">{item.title}</h2>
            <p className="text-sm text-white-600">{item.description}</p>
            <div className="flex mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={`${
                    i < Math.round(item.rating) ? "text-yellow-400" : "text-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
