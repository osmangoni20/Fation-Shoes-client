import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import route from './routes/route.tsx'
import AuthProvider from './AuthProvider/AuthProvider'
import { Toaster } from 'react-hot-toast';
import { createContext } from 'vm'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
export const  cartCountContext=createContext();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
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

    <RouterProvider router={route} />
    </AuthProvider>
    </Provider>
  </React.StrictMode>,
)
