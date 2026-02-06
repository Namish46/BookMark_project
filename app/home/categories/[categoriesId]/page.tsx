"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
type Category = {
  slug: string;
  name: string;
  url?: string;
};
function ExplorePage(){
  const [categories,setCategories] =useState<Category[]>([]);
  const [selected,setSelected] =useState<string | null>(null);
  const router=useRouter();
  useEffect(()=>{
    fetch("/api/categories")
      .then(res => res.json())
      .then((data: Category[]) => setCategories(data));
  }, []);

  const handleContinue=()=>{
    if (selected){
      router.push(`/home/explore/`);
    } else{
      router.push("/home/explore/");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Explore Your Interests</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {categories.map((cat) => (
          <div key={cat.slug} onClick={() => setSelected(cat.slug)} className={`p-4 rounded text-white font-semibold text-center cursor-pointer ${selected === cat.slug ? "bg-blue-500" : "bg-gray-400"}`}>
{cat.name}</div>
        ))}
      </div>
      <button onClick={handleContinue} className="px-4 py-2 bg-green-500 text-white rounded">Continue</button>
    </div>
  );
}
export default ExplorePage;