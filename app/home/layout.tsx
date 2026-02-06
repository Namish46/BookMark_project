"use client"
import Sidebar from "../components/sidebar"
import SearchBar from "../components/searchbar"

export default function HomeLayout({children}:{children:React.ReactNode}) {
  return(
    <div className="flex h-screen ">
      <Sidebar/>
      <div className="flex-1 flex flex-col">
        <SearchBar/>
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  )
}
