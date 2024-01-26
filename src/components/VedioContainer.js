import React, { useEffect, useState } from 'react'
import { YOUTUBE_LIKED_API, YOUTUBE_VEDIO_API } from '../utils/constants';
import Vediocard from './Vediocard';
import { Link } from 'react-router-dom';

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
    <div className='row flex mx-2 my-2 flex-wrap'>
      {vedios.map((vedio)=>
      <Link to={"/watch?v="+vedio.id} key={vedio.id}><Vediocard info={vedio} key={vedio.id}/></Link>
      )}
    
    </div>
  )
}

export default VedioContainer