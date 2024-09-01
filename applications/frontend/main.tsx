import 'reflect-metadata'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { configureDependencies } from '@frontend/infrastructure/dependency-injection/container'
import { RouterProvider } from '@frontend/adapter/router/RouterProvider'
import { configureEventBus } from '@frontend/infrastructure/eventBus'
import { configureStore } from '@frontend/adapter/store/useStore'
import '@frontend/ui/styles/index.css'

async function init() {
  configureDependencies()
  configureEventBus()
  await configureStore()

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <RouterProvider />
    </React.StrictMode>,
  )
}

init()
