import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AuthContextCompo from './AuthContext/AuthContextCompo'
import { router } from './Route/Route'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextCompo>
      <RouterProvider router={router}></RouterProvider>
    </AuthContextCompo>
  </React.StrictMode>,
)
