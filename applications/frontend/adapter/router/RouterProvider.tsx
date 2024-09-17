import { Router } from './Router'
import { routes } from './Routes'
import {
  createBrowserRouter,
  RouterProvider as ReactRouterProvider,
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Router />,
    children: routes.map((route) => ({
      index: route.path === '/',
      path: route.path === '/' ? undefined : route.path,
      element: route.element,
    })),
  },
])

const RouterProvider = () => <ReactRouterProvider router={router} />

export { RouterProvider }
