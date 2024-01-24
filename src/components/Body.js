import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'

function Body() {
  return (
    <div className='flex text-sm'>
      <Sidebar />
      <MainContainer />
    </div>
  )
}

export default Body