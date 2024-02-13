import React, { useEffect, useState, useRef } from 'react';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import Suggestionbox from './Suggestionbox';
import { useDispatch, useSelector } from 'react-redux';
import { cacheResults } from '../utils/searchSlice';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([]);
  const [suggestionBox, setSuggestionBox] = useState(false);
  const inputRef = useRef();
  
  const searchCache=useSelector(store=>store.search);
  const dispatch=useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]){
        setData(searchCache[searchQuery]);
      }else{
        getSearchSuggestions();
      }
    }, 200);

    const getSearchSuggestions = async () => {
      const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await response.json();
      setData(json?.items);
      console.log("Api Call made - "+searchQuery)
      dispatch(cacheResults({
        [searchQuery] : data,
      }));
    };
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return (
    <div className='relative col-span-10 text-center'>
      <div>
        <input
          className='w-1/2 border border-gray-400 rounded-l-full h-9 px-5 ml-4'
          type='text'
          placeholder='Search'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          ref={inputRef}
          onBlur={()=>setSuggestionBox(false)}
          onFocus={()=>setSuggestionBox(true)}
        />
        <button className='border border-gray-400 rounded-r-full px-3 bg-gray-200 h-9'>🔎</button>
      </div>
      {suggestionBox ? (
      <Suggestionbox data={data}/>
      ) : null}
    </div>
  );
};

export default Search;
