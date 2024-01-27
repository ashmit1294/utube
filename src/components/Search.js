import React,{useEffect, useState} from 'react'
import { YOUTUBE_SEARCH_API } from '../utils/constants';

const Search = () => {
    const [searchQuery,setSearchQuery]=useState("");
    useEffect(()=>{
    const timer=setTimeout(()=>getSearchSuggestions(),200)
    const getSearchSuggestions=async()=>{
      const data=await fetch(YOUTUBE_SEARCH_API+searchQuery);
      const json=await data.json();
      console.log(json?.items)
  }
     return ()=>{
        clearTimeout(timer);
     }  
    },[searchQuery])

   

  return (
    <div className='col-span-10 text-center'>
    <input className='w-1/2 border border-gray-400 rounded-l-full h-9 px-5' type="text" placeholder='Search' value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} />
    <button className='border border-gray-400  rounded-r-full px-3 bg-gray-200 h-9'>🔎</button>
    </div>
  )
}

export default Search