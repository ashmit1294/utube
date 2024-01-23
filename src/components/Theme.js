import React from 'react'
import Header from '../components/Header'
import Body from "../components/Body";
import {useSelector} from 'react-redux'
 const Theme = () => {
    const isDark=useSelector(store=>store.theme.isDark);
    return (
      <div className={`${
        isDark ? 'bg-black text-white' : 'bg-white text-black'
      } bg-blend-luminosity`}>
      <Header />
      <Body />
      </div>
    )
}
export default Theme;
