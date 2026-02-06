"use client";

import { useState } from "react";

export default function AddCategoryPage() {
  const [name, setName] = useState("");
  const [color, setColor] = useState("#34d399");
  const [categories, setCategories] = useState([]);

  const handleAdd = () => {
    if (name === "") {
      alert("Enter category name");
      return;
    }
    // simplest way to add new category
    setCategories([...categories, { name, color }]);
    setName("");
    setColor("#34d399");
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Add New Category</h1>

      <div className="mb-4 flex flex-col gap-2">
        <input
          type="text"
          placeholder="Category Name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="color"
          value={color}
          onChange={e => setColor(e.target.value)}
          className="w-16 h-16 border rounded"
        />
        <button onClick={handleAdd} className="px-4 py-2 bg-blue-500 text-white rounded">
          Add Category
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="p-4 rounded text-white font-semibold flex justify-center items-center"
            style={{ backgroundColor: cat.color }}
          >
            {cat.name}
          </div>
        ))}
      </div>
    </div>
  );
}
