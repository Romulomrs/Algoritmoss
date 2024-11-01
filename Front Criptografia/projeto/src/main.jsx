import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import Descriptografia from './Descriptografia.jsx';
import TelaInicial from './TelaInicial.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
{
  path:'/',
  element:<TelaInicial/>,
},
  {
    path: '/App',
    element: <App />,
  },
  {
    path: '/Descriptografia',
    element: <Descriptografia />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);