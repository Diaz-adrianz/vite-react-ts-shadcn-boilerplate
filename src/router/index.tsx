import IndexLayout from '@/views/layout/Index';
import { createBrowserRouter } from 'react-router-dom';
import MainRouter from './main.router';
import AuthRouter from './auth.router';
import Exception404 from '@/views/pages/exceptions/Exception404';

const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexLayout />,
    children: [
      ...MainRouter,
      ...AuthRouter,
      {
        path: '*',
        element: <Exception404 />,
      },
    ],
  },
]);

export default router;
