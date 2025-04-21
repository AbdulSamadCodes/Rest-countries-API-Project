import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { LoginPage } from '/src/Components/LoginPage.jsx';

import { RootLayout } from '/src/Components/RootLayout.jsx';
import { Dashboard } from '/src/Components/Dashboard/Dashboard.jsx';


const router = createBrowserRouter(
  [
    {
      element : <LoginPage/>,
      path:'/'
    },
    {
      element : <RootLayout/>,
      path:'dashboard',
      children: [
        {
          index:true,
          element: <Dashboard/>,
        }
      ]
    }
  ]
);

export { router };