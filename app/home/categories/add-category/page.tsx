"use client";
import { useState } from "react";
import { Star, Heart, Tag, Zap } from "lucide-react";

export default function AddCategoryPage() {
  const [name,setName]=useState("");
  const [color,setColor]=useState("#34d399");
  const [icon,setIcon]=useState("Star");
  const [categories,setCategories]=useState([]);
  const iconsMap = { Star, Heart, Tag, Zap };

  const handleAdd=()=>{
    if(!name){alert("Enter category name"); return;}
    setCategories([...categories,{name,color,icon}]);
    setName(""); setColor("#34d399"); setIcon("Star");
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Add New Category</h1>

      <div className="mb-4 flex flex-col gap-2">
        <input type="text" placeholder="Category Name" value={name} onChange={e=>setName(e.target.value)} className="border p-2 rounded"/>
        Colors:
        <div className="flex gap-2">
          <button onClick={()=>setColor("#34d399")} className={`w-8 h-8 rounded ${color==="#34d399"?"ring-2 ring-black":""}`} style={{backgroundColor:"#34d399"}}></button>
          <button onClick={()=>setColor("#f87171")} className={`w-8 h-8 rounded ${color==="#f87171"?"ring-2 ring-black":""}`} style={{backgroundColor:"#f87171"}}></button>
        </div>
        Icons:
        <div className="flex gap-2">
          {Object.entries(iconsMap).map(([name, IconComp])=>{
            return <button key={name} onClick={()=>setIcon(name)} className={`p-2 border rounded ${icon===name?"bg-gray-200":""}`}><IconComp size={20}/></button>
          })}
        </div>

        <button onClick={handleAdd} className="px-4 py-2 bg-blue-500 text-white rounded">Add Category</button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((cat,i)=>{
          const IconComp = iconsMap[cat.icon];
          return <div key={i} className="p-4 rounded text-white font-semibold flex flex-col justify-center items-center" style={{backgroundColor:cat.color}}>
            <IconComp size={24}/><span className="mt-1">{cat.name}</span>
          </div>
        })}
      </div>
    </div>
  );
}
