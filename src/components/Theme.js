import React from 'react'
import Header from '../components/Header'
import Body from "../components/Body";
import {useSelector} from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './MainContainer';
import WatchPage from './WatchPage';

 const Theme = () => {
    const isDark=useSelector(store=>store.theme.isDark);
    const appRouter=createBrowserRouter([
      {
        path:"/",
        element:<Body />,
        children:[
            {
              path:"/",
              element:<MainContainer/>,
            },
            {
              path:"watch",
              element:<WatchPage/>,
            },
          ],
        },
      ] 
    );

    return (
      <div className={`${
        isDark ? 'bg-black text-white' : 'bg-white text-black'
      } bg-blend-luminosity`}>
      <Header />
      <RouterProvider router={appRouter} />
      </div>
    )
}
export default Theme;
