import React from 'react';

const Suggestionbox = ({data}) => {
  return (
    <div className='py-2 px-5 w-[33rem] shadow-lg rounded-lg bg-white text-left absolute ml-[16rem]'>
          <ul>
            {data?.map((obj,i) => (
              <li key={i}>{obj.snippet.title}</li>
            ))}
          </ul>
        </div>
  )
}

export default Suggestionbox;