import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import route from './routes/route.tsx'
import AuthProvider from './AuthProvider/AuthProvider'
import { Toaster } from 'react-hot-toast';
import { createContext } from 'vm'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store.ts'
import { PersistGate } from 'redux-persist/integration/react'
export const  cartCountContext=createContext();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

    
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
    </PersistGate>
    </Provider>
  </React.StrictMode>,
)
