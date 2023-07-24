import { RouteObject } from 'react-router-dom';

import AboutPage from './pages/about.page';
import ContactPage from './pages/contact.page';
import PrivacyPolicyPage from './pages/privacyPolicy.page';
import TermsServicePage from './pages/termsService.page';
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

export const aboutPageRoutes: RouteObject[] = [
  {
    path: '/sobre',
    element: <AboutPage />,
  },
];

export const contactPageRoutes: RouteObject[] = [
  {
    path: '/contato',
    element: <ContactPage />,
  },
];

export const termsServicePageRoutes: RouteObject[] = [
  {
    path: '/termos',
    element: <TermsServicePage />,
  },
];

export const privacyPolicyPageRoutes: RouteObject[] = [
  {
    path: '/privacidade',
    element: <PrivacyPolicyPage />,
  },
];
