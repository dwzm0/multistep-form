import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom'
import './index.css'

const router = createHashRouter([
  {
    path: '/*',
    element: <App />
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
    <React.StrictMode>
         <RouterProvider router={router} />
    </React.StrictMode>
)
