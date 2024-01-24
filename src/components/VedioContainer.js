import React, { useEffect, useState } from 'react'
import { YOUTUBE_LIKED_API, YOUTUBE_VEDIO_API } from '../utils/constants';
import Vediocard from './Vediocard';

const VedioContainer = () => {

const [vedios,setVedios]=useState([])

useEffect(()=>{
  getVedios();
},[]);

const  getVedios=async()=>{
  const data=await fetch(YOUTUBE_VEDIO_API);
  const data2=await  fetch(YOUTUBE_LIKED_API);
  const json2=await data2.json();
  const json= await data.json();
  setVedios([...json.items,...json2.items]); 
}

  return (
    <div className='row flex mx-2'>
      {vedios.map((obj)=>
      <Vediocard info={obj} />
      )}
    
    </div>
  )
}

export default VedioContainer