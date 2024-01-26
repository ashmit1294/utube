import React from 'react'
import Button from './Button'

const ButtonList = () => {

  const list=["All","Gaming","Live","Soccer","Songs","cricket","Cooking","Valentines","Songs","cricket","Cooking","Valentines","Gaming","Live","Soccer"]

  return (
    <div className='flex flex-wrap'>
      {list.map((val)=>
          <Button name={val} />
      )}  
    </div>
  )
}

export default ButtonList