import React from 'react'
import Button from './Button'

const ButtonList = () => {

  const list=["All","Gaming","Live","Soccer","Songs","cricket","Cooking","Valentines","Songs","cricket","Cooking","Valentines","Gaming","Live","Soccer"]

  return (
    <div className='flex flex-wrap'>
      {list?.map((val,i)=>
          <Button name={val} key={i} />
      )}  
    </div>
  )
}

export default ButtonList