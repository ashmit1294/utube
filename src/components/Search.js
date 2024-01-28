import React, { useEffect, useState, useRef } from 'react';
import { YOUTUBE_SEARCH_API } from '../utils/constants';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([]);
  const [suggestionBox, setSuggestionBox] = useState(false);
  const inputRef = useRef();

  const handleOutsideClick = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setSuggestionBox(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 200);

    const getSearchSuggestions = async () => {
      const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await response.json();
      setData(json?.items);
    };
      // Attach the event listener when the component mounts.
      document.addEventListener('click', handleOutsideClick);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleOutsideClick);
    
    };
  }, [searchQuery]);
  // console.log(data[0]?.id.videoId)

  return (
    <div className='relative col-span-10 text-center'>
      <div>
        <input
          className='w-1/2 border border-gray-400 rounded-l-full h-9 px-5 ml-4'
          type='text'
          placeholder='Search'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onClick={() => setSuggestionBox(true)}
          ref={inputRef}
        />
        <button className='border border-gray-400 rounded-r-full px-3 bg-gray-200 h-9'>🔎</button>
      </div>
      {suggestionBox ? (
        <div className='py-2 px-5 w-[34rem] shadow-lg rounded-lg bg-white text-left absolute ml-[16rem]'>
          <ul>
            {data?.map((obj,i) => (
              <li key={i}>{obj.snippet.title}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Search;
