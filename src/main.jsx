import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router'
import './index.css'
import { Toaster } from 'react-hot-toast'
import AuthProvider from './context/AuthProvider'
import router from './routes/routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#3A7D44',
            color: '#fff',
            fontFamily: 'Inter, sans-serif',
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: '#6FBF73',
              secondary: '#fff',
            },
          },
          error: {
            duration: 4000,
            style: {
              background: '#C47E5A',
            },
            iconTheme: {
              primary: '#fff',
              secondary: '#C47E5A',
            },
          },
        }}
      />
    </AuthProvider>
  </React.StrictMode>,
)