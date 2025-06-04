import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '/src/Components/RootLayout.jsx';
import { Dashboard } from '/src/Components/Dashboard/Dashboard.jsx';
import { Container } from '/src/Components/Container.jsx'

const router = createBrowserRouter(
  [
    {
      element: <RootLayout />,
      path: '/',
      children: [

        {
          index : true,
          element : <Container>
                        <Dashboard/>
                    </Container>
        }        

      ]
    }
  ]
);

export { router };