import  React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom';
import { router } from '/src/Routing/router.jsx';
import { GlobalStyle } from '/src/Components/StyledComponents/GlobalStyle.jsx';
import { Container } from '/src/Components/LoginPage.jsx'

import '/src/styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <GlobalStyle />

    <Container>  
      
      <RouterProvider router={router}>
        <App />
      </RouterProvider>

    </Container>

  </>
)
