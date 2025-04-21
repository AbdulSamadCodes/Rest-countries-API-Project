import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { LoginPage } from '/src/Components/LoginPage.jsx';

import { Dashboard } from '/src/Components/Dashboard.jsx';

const router = createBrowserRouter(
  [
    {
      element : <LoginPage/>,
      path:'/'
    }
  ]
);

export { router };