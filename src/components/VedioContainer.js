import React, { useEffect, useState } from 'react'
import { YOUTUBE_VEDIO_API } from '../utils/constants';
import Vediocard from './Vediocard';

const VedioContainer = () => {

const [vedios,setVedios]=useState([])

useEffect(()=>{
  getVedios();
},[]);

const  getVedios=async()=>{
  const data=await fetch(YOUTUBE_VEDIO_API);
  const json= await data.json();
  setVedios(json.items); 
}

  return (
    <div className='row flex mx-2'>
      {vedios.map((obj)=>
      <Vediocard info={obj} />
      )}
      {vedios.map((obj)=>
      <Vediocard info={obj} />
      )}
      {vedios.map((obj)=>
      <Vediocard info={obj} />
      )}
    
    </div>
  )
}

export default VedioContainer