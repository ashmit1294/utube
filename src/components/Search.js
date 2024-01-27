import React,{useEffect, useState} from 'react'
import { YOUTUBE_SEARCH_API } from '../utils/constants';
// import searchIcon from '../assets/searchIcon.svg'
// import Suggestions from './Suggestions';

const Search = () => {
    const [searchQuery,setSearchQuery]=useState("");
    const [data,setData]=useState([])

    useEffect(()=>{
    const timer=setTimeout(()=>getSearchSuggestions(),500)
    const getSearchSuggestions=async()=>{
      const data=await fetch(YOUTUBE_SEARCH_API+searchQuery);
      const json=await data.json();
      setData(json?.items)
  }
     return ()=>{
        clearTimeout(timer);
     }  
    },[searchQuery])

    
  console.log(data);

  return (<div>

  
    <div className='col-span-10 text-center'>
      <input className='w-1/2 border border-gray-400 rounded-l-full h-9 px-5' type="text" placeholder='Search' value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} />
      <button className='border border-gray-400  rounded-r-full px-3 bg-gray-200 h-9'>🔎
        {/* {searchIcon} */}
        </button>
      </div>

    <div className='fixed bg-white py-2 px-5 w-[37rem]'>
        <ul>
           {data?.map((obj)=><li>{obj.snippet.title}</li>)}
        </ul>
    </div>
    </div>)
}

export default Search