'use client'
import { useState } from "react";
function SearchBar() {
  const [State, setState] = useState("");
  function handleBookmark(){
    console.log("clicked");
  }
  return (
    <div>
    <input type="text" value={State} onChange={(e) => setState(e.target.value)} placeholder="Search..."className="flex-1 w-350 p-4 border rounded "></input>
    <button onClick={handleBookmark} className="p-4 bg-blue-500 text-white rounded hover:bg-blue-600 m-3">+New Bookmark</button>
    </div>
  );
}
export default SearchBar;