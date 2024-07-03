import "reflect-metadata"
import React from 'react'
import ReactDOM from 'react-dom/client'
import '@gameContext/shared/infrastructure/diContainer'
import { RouterProvider } from '@frontend/adapter/router/RouterProvider'
import '@frontend/ui/styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider />
  </React.StrictMode>
)
