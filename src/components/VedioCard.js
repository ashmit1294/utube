import React from 'react'

const Vediocard = ({info}) => {
    
    const {snippet,statistics}=info;
    const {channelTitle,title,thumbnails}=snippet;  

  return (
    <div className='text-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white-400 dark:border-gray-300 m-2 w-96 h-60 '>
      <img className='rounded-lg max-w-full object-cover' src={thumbnails.high.url} alt="vediocard" key={info.id} />
      <ul>
        <li className='font-bold m-2 py-2 '>{title}</li>
        <li className='m-2 '>{channelTitle}</li>
        <li className='m-2 text-xs'>{statistics.viewCount} views</li>
      </ul>
    
    </div>
  )
}

export default Vediocard;