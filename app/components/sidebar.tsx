"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-56 bg-black-100 p-4">
      <h2 className="font-bold mb-6">Bookmark App</h2>

      <ul className="space-y-3">
        <li>
          <Link href="/home" className="block hover:underline">
            Home
          </Link>
        </li>

        <li>
          <Link href="/home/categories" className="block hover:underline">
            Categories
          </Link>
        </li>
        <li>
         <Link href="/home/categories/add-category" className="block hover:underline">
            Add Category
          </Link>
          </li>
        <li>
          <Link href="/home/frequent" className="block hover:underline">
            Frequent
          </Link>
        </li>

        <li>
          <Link href="/home/explore" className="block hover:underline">
            Explore
          </Link>
        </li>

        <li>
          <Link href="/home/addBookmark" className="block hover:underline">
            Add Bookmark
          </Link>
        </li>

        <li>
          <Link href="/home/settings" className="block hover:underline">
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
}
