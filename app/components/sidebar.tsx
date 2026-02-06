"use client";
import Link from "next/link";
function Sidebar(){
  return (
    <div className="w-56 bg-gray-800 p-4">
      <img className="w-40 m-5" src={"https://media.licdn.com/dms/image/sync/v2/D5627AQGQWu7AJYltUQ/articleshare-shrink_800/B56ZvAgaPzJEAI-/0/1768461280618?e=2147483647&v=beta&t=hReyPCt3LiOd6D_ZpSEoSgjz_vH1UT2sMel49iHaJLg"}></img>
      <ul className="space-y-3 m-5">
        <li><Link href="/home" className="mt-8 block hover:underline">Home</Link></li>
        <li><Link href="/home/categories" className="mt-5 block hover:underline">Categories</Link></li>
        <li><Link href="/home/categories/add-category" className="mt-5 block hover:underline">Add Category</Link></li>
        <li><Link href="/home/frequent" className=" mt-5 block hover:underline">Frequent</Link></li>
        <li><Link href="/home/explore" className="mt-5 block hover:underline">Explore</Link></li>
        <li><Link href="/home/addBookmark" className="mt-5 block hover:underline">Add Bookmark</Link></li>
        <li><Link href="/home/settings" className="mt-5 block hover:underline">Settings</Link></li>
      </ul>
    </div>
  );
}
export default  Sidebar;