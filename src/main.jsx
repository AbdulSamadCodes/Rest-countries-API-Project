import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App.jsx'

import { GlobalStyle } from '/src/Components/StyledComponents/GlobalStyle.jsx';
import { Provider } from 'react-redux';
import { store } from '/src/Store/store.js';
import { RouterProvider } from 'react-router-dom';
import { router } from '/src/Routing/router.jsx';

import '/src/styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <GlobalStyle />

    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </>
);
