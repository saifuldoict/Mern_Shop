import React,{ useState } from 'react'
import { IoMdSearch } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const SearchInput = () => {
    const [search, setSearch]= useState("")
  return (
   <div className="relative group hidden sm:block">
        <input onChange={(e)=>setSearch(e.target.value)}
            value={search}
            type="text"
            placeholder="Search"
            className="w-[200px] sm:w-[200px] group-hover:w-[600px] transition-all duration-300 rounded-lg border border-gray-300 py-1 px-2
            text-sm focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-slate-800"
            />
            {search?(<RxCross2 onClick={()=>setSearch("")}
            className="text-slate-800 hover:text-red-600 cursor-pointer duration-300 absolute top-1/2 -translate-y-1/2 right-3"/>
                
            ): (<IoMdSearch className="text-slate-800 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" /> )}
           
        </div>
  )
}

export default SearchInput