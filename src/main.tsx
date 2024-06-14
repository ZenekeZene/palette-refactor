import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from '@/adapter/router/RouterProvider'
import { useStore } from '@/adapter/store/store'
import '@/ui/styles/index.css'

useStore.getState().startGame()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider />
  </React.StrictMode>,
)
