import { RouteObject } from 'react-router-dom';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

export const loginRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <LoginScreen />,
  },
];

export const registerRoutes: RouteObject[] = [
  {
    path: '/registro',
    element: <RegisterScreen />,
  },
];
