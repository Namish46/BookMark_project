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
      <img className="w-40 h-30 m-5"src={"https://media.licdn.com/dms/image/sync/v2/D5627AQGQWu7AJYltUQ/articleshare-shrink_800/B56ZvAgaPzJEAI-/0/1768461280618?e=2147483647&v=beta&t=hReyPCt3LiOd6D_ZpSEoSgjz_vH1UT2sMel49iHaJLg"}></img>
      {links.map((link) => (
        <Link key={link.name}href={link.path}className="p-2 rounded hover:bg-gray-700">
          {link.name}
        </Link>
      ))}
    </div>
  );
}
export default Sidebar;