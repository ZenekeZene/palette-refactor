import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from '@/adapter/router/RouterProvider'
import '@/ui/styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider />
  </React.StrictMode>,
)
