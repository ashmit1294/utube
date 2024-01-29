import React from 'react';
import Header from '../components/Header';
import Body from '../components/Body';
import { useSelector } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './MainContainer';
import WatchPage from './WatchPage';

const Theme = () => {
  const isDark = useSelector(store => store.theme.isDark);
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Body />,
      children: [
        {
          path: '/',
          element: <MainContainer />,
        },
        {
          path: 'watch',
          element: <WatchPage />,
        },
      ],
    },
  ]);

  // Define background styles based on the theme
  const backgroundStyle = isDark ? 'bg-black text-white' : 'bg-white text-black';

  return (
    <div className={backgroundStyle}>
      <Header />
      <div className="bg-blend-luminosity">
        <RouterProvider router={appRouter} />
      </div>
    </div>
  );
};

export default Theme;
