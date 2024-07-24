import 'reflect-metadata'
import React from 'react'
import ReactDOM from 'react-dom/client'
import '@gameContext/shared/infrastructure/dependency-injection/container'
import { RouterProvider } from '@frontend/adapter/router/RouterProvider'
import '@frontend/ui/styles/index.css'
import { configureEventBus } from '@frontend/infrastructure/eventBus'
import { configureStore } from '@frontend/adapter/store/useStore'

configureEventBus()
await configureStore()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider />
  </React.StrictMode>,
)
