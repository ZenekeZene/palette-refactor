import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from './router/RouterProvider';
import { useStore } from './store/store'
import './index.css'

useStore.getState().startGame()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider />
  </React.StrictMode>,
)
