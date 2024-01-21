import React, { useEffect, useState } from 'react'
import { YOUTUBE_VEDIO_API } from '../utils/constants'

const VedioContainer = () => {

const [vedios,setVedios]=useState([])

useEffect(()=>{
  getVedios();
},[])

const  getVedios=async()=>{
  const data=await fetch(YOUTUBE_VEDIO_API);
  const json= await data.json();
  setVedios(json.items);
  console.log(vedios)
}

  return (
    <div>VedioContainer</div>
  )
}

export default VedioContainer