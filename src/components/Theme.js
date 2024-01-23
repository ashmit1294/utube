import React from 'react'
import Header from '../components/Header'
import Body from "../components/Body";
import {useSelector} from 'react-redux'
 const Theme = () => {
    const isDark=useSelector(store=>store.theme.isDark);
    return (
      <div className={`${
        isDark ? 'bg-gray-600 text-white' : 'bg-gray-100 text-black'
      }`}>
      <Header />
      <Body />
      </div>
    )
}
export default Theme;
