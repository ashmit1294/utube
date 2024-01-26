import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {
    let [searchParams] = useSearchParams();
    console.log(searchParams.get("v"))
    const dispatch=useDispatch();   
    useEffect(()=>{
    dispatch(closeMenu());
    });
  return (
    <div className='px-5'>
        <iframe 
        width="1100" 
        height="600" 
        title={searchParams.get("v")}
        src={"https://www.youtube.com/embed/"+searchParams.get("v")}
        frameborder="0" 
        allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen>

        </iframe>
        
    </div>
  )
}

export default WatchPage;