"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/home/explore?search=${encodeURIComponent(query)}`);
    }
  };

  const handleAddBookmark = () => {
    router.push("/home/addBookmark"); // redirect to Add Bookmark
  };

  return (
    <div className="flex items-center gap-2 mb-4">
      <input
        type="text"
        placeholder="Search bookmarks..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 rounded flex-1"
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-gray-200 rounded"
      >
        Search
      </button>

      {/* + button to add new bookmark */}
      <button
        onClick={handleAddBookmark}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        + Add
      </button>
    </div>
  );
}
