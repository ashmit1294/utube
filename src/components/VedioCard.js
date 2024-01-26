import React from 'react'

const Vediocard = ({info}) => {
    
    const {snippet,statistics}=info;
    const {channelTitle,title,thumbnails}=snippet;  

  return (
    <div className='p-2 m-2 w-72 shadow-lg '>
      <img className='rounded-lg ' src={thumbnails.medium.url} alt="vediocard" key={info.id} />
      <ul>
        <li className='font-bold m-2 py-2 '>{title}</li>
        <li className='m-2 '>{channelTitle}</li>
        <li className='m-2 text-xs'>{statistics.viewCount} views</li>
      </ul>
    
    </div>
  )
}

export default Vediocard;