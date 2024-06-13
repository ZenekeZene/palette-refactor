import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from './router/RouterProvider';
import './index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider />
  </React.StrictMode>,
)
