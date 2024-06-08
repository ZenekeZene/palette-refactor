import { routes } from "./Routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(routes);

const RoutesProvider = () => <RouterProvider router={router} />;

export { RoutesProvider };
