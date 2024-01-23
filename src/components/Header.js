import React from 'react'
// import logo from '../assets/searchmagnifier_logo.svg';
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import moon from '../assets/moon.svg'
import { toggleTheme } from '../utils/themeSlice';
// import logo from '../assets/youtube.png'
function Header() {
  const dispatch=useDispatch();
  const toggleMenuHandler=()=>{
      dispatch(toggleMenu());
  }
  const toggleThemeHandler=()=>{
    dispatch(toggleTheme());
}
  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-lg'>
      <div className='flex col-span-1'>
      <img onClick={()=>toggleMenuHandler()} className='h-8 w-9 mx-2 cursor-pointer ' src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp" alt="hamburger_menu" />
      <a href="/" ><img className='h-6 mt-1' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjdB5idttrtpfZkhv3Dz20jvA14SXgOCOKQiBT6_tnEyagCBi91sEJMTU8X6eLxzb5dQ&usqp=CAU" alt="youtube_logo"  /></a>
    </div>
    <div className='col-span-10 text-center'>
    <input className='w-1/2 border border-gray-400 rounded-l-full h-9 px-5' type="text" placeholder='Search' />
    <button className='border border-gray-400  rounded-r-full px-5 bg-gray-200 h-9'>
      Search{/* <img className='w-3/4 h-6' src={logo} alt="magnify_icon"  /> */}
      </button>
    </div>
    <div className='col-span-1 flex'>
    <img alt="theme_app" onClick={()=>toggleThemeHandler()}  src={moon}/>
    <img src="data:image/png;base64,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" alt="user_profile" className='h-9' />  
    </div> 
    </div>
  )
}

export default Header;