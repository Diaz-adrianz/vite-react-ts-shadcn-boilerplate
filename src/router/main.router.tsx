import MainLayout from '@/views/layout/Main';
import HomePage from '@/views/pages/main/Home';
import { RouteObject } from 'react-router-dom';

const MainRouter: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
];

export default MainRouter;
