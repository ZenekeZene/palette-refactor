import React from 'react'
import { routes } from './Routes'
import {
  createBrowserRouter,
  RouterProvider as ReactRouterProvider,
} from 'react-router-dom'

const router = createBrowserRouter(routes)

const RouterProvider = () => <ReactRouterProvider router={router} />

export { RouterProvider }
