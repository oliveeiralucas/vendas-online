import type { Router as RemixRouter } from '@remix-run/router';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

import { loginRoutes, registerRoutes } from './modules/login/routes';
import { Error404 } from './modules/login/styles/pageNotFound.styles';
const mainRoutes: RouteObject[] = [
  {
    path: '/',
    element: <div>Tela Principal</div>,
    errorElement: <Error404 />,
  },
];

const router: RemixRouter = createBrowserRouter([...mainRoutes, ...loginRoutes, ...registerRoutes]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
