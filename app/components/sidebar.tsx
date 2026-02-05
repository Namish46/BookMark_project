import Link from "next/link";
function Sidebar() {
  const links = [
    {name:"Home",path:"/home"},
    {name:"Categories",path:"/home/categories"},
    {name:"Frequent",path:"/home/frequent"},
    {name:"Explore",path:"/home/explore"},
    {name:"Add Bookmark",path:"/home/add-bookmark"},
    {name:"Settings",path:"/home/settings"},
];
  return (
    <div className="w-55 bg-gray-800 text-white p-3 flex flex-col">
      <img className="w-40 h-30 m-5"src={"https://img.utdstc.com/icon/7fb/e7c/7fbe7cf186bb807af7e5354f933fd89a63c8e83fa2e8a685dfa91274ccc72888:200"}></img>
      {links.map((link) => (
        <Link key={link.name}href={link.path}className="p-2 rounded hover:bg-gray-700">
          {link.name}
        </Link>
      ))}
    </div>
  );
}
export default Sidebar;