import type { Router as RemixRouter } from '@remix-run/router';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

import {
  aboutPageRoutes,
  contactPageRoutes,
  loginRoutes,
  privacyPolicyPageRoutes,
  registerRoutes,
  termsServicePageRoutes,
} from './modules/login/routes';
import HomePage from './modules/login/screens/HomePage';
import { Error404 } from './modules/login/styles/pageNotFound.styles';

const mainRoutes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
    errorElement: <Error404 />,
  },
];

const router: RemixRouter = createBrowserRouter([
  ...mainRoutes,
  ...loginRoutes,
  ...registerRoutes,
  ...aboutPageRoutes,
  ...contactPageRoutes,
  ...privacyPolicyPageRoutes,
  ...termsServicePageRoutes,
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
