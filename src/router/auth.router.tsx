import AuthLayout from '@/views/layout/Auth';
import LoginPage from '@/views/pages/auth/Login';
import { RouteObject } from 'react-router-dom';

const AuthRouter: RouteObject[] = [
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
    ],
  },
];

export default AuthRouter;
