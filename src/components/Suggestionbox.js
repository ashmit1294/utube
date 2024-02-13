import React from 'react';
// import logo from '../assets/searchIcon.png';
const Suggestionbox = ({data}) => {
  return (
    <div className='py-2 px-5 w-[33rem] shadow-lg rounded-lg bg-white text-left absolute ml-[16rem]'>
          <ul>
            {data?.map((obj) => (
              <li className=' hover:bg-gray-200 hover:shadow-lg hover:rounded-lg w-full text-left m-1' key={obj.etag}>🔎 {obj.snippet.title}</li>
            ))}

          </ul>
        </div>
  )
}

export default Suggestionbox;