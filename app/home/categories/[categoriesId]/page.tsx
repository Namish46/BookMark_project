"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type Category = {
  slug: string;
  name: string;
  url?: string;
};

export default function ExplorePage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Example fetch returning objects
    fetch("/api/categories") // Replace with your real API or DummyJSON endpoint
      .then(res => res.json())
      .then((data: Category[]) => setCategories(data));
  }, []);

  const handleContinue = () => {
    if (selected) {
      router.push(`/home/categories/${selected}`);
    } else {
      router.push("/home/categories"); // fallback
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Explore Your Interests</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {categories.map((cat) => (
          <div
            key={cat.slug} // unique key
            onClick={() => setSelected(cat.slug)}
            className={`p-4 rounded text-white font-semibold text-center cursor-pointer ${
              selected === cat.slug ? "bg-blue-500" : "bg-gray-400"
            }`}
          >
            {cat.name} {/* render the name, not the object */}
          </div>
        ))}
      </div>

      <button
        onClick={handleContinue}
        className="px-4 py-2 bg-green-500 text-white rounded"
      >
        Continue
      </button>
    </div>
  );
}
