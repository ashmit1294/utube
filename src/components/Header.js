import React from 'react'
// import logo from '../assets/searchmagnifier_logo.svg';
import { useDispatch ,useSelector} from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import Search from './Search';
import moon from '../assets/moon.svg'
import sun from '../assets/sun.svg'
import { toggleTheme } from '../utils/themeSlice';
import profile from '../assets/profile.svg'
import youTube from '../assets/youTube.svg'
// import logo from '../assets/youtube.png'
function Header() {
  const dispatch=useDispatch();
  const toggleMenuHandler=()=>{
      dispatch(toggleMenu());
  }
  const toggleThemeHandler=()=>{
    dispatch(toggleTheme());
}
const isDark=useSelector(store=>store.theme.isDark);
  return (
    <div className=' grid grid-flow-col p-2 shadow-lg'>
      <div className='flex col-span-1'>
      <img onClick={()=>toggleMenuHandler()} className='h-8 w-9 mx-2 cursor-pointer' src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp" alt="hamburger_menu" />
      <a href="/" ><img className='h-6 mt-1' src={youTube} alt="youtube_logo"  /></a>
    </div>
    <Search />
    <div className='col-span-1 flex float-right justify-between'>
    <img alt="theme_app" onClick={()=>toggleThemeHandler()}  src={isDark?moon:sun} className='w-10 h-10 '/>
    <img src={profile} alt="user_profile" className='h-9' />  
    <img src={profile} alt="user_profile" className='h-9' />  
    </div> 
    </div>
  )
}

export default Header;