import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom';
import { router } from '/src/Routing/router.jsx';
import { GlobalStyle } from '/src/Components/StyledComponents/GlobalStyle.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <GlobalStyle />

    <RouterProvider router={router}>
      <App />
    </RouterProvider>
    
  </>
)
