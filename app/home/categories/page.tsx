'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

function CategoriesPage(){
  const [categories,setCategories] =useState<any[]>([]);
  const [loading,setLoading] =useState(true);
  useEffect(()=>{
    fetch('https://dummyjson.com/products/categories')
      .then((res)=>res.json())
      .then((data)=>{
        setCategories(data);
        setLoading(false);
      });
  },[]);
  if (loading){
    return <p className="p-6">Loading categories...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Categories</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((cat)=>(
          <Link key={cat.slug} href={`/home/categories/${cat.slug}`}className="block">
            <div className="bg-grey-500 border rounded-xl p-4 shadow-sm hover:shadow-md transition">
              <p className="text-lg font-medium capitalize">{cat.name}</p>
              <p className="text-sm text-gray-500 mt-1">View bookmarks</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default CategoriesPage;