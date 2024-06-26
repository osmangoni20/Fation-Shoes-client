import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import route from './routes/route.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast';
import { createContext } from 'vm'
import ListAddCart from './context/ListAddCart.jsx'
export const  cartCountContext=createContext();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <Toaster
  toastOptions={{
    className: '',
    style: {
      border: '1px solid #713200',
      padding: '16px',
      color: '#713200',
    },
  }}
/>
  <ListAddCart>
  <RouterProvider router={route} />
  </ListAddCart>
    </AuthProvider>
  </React.StrictMode>,
)
