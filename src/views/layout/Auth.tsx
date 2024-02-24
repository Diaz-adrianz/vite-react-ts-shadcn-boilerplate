import { Outlet } from 'react-router-dom';
import Helmet from 'react-helmet';

export default function AuthLayout() {
  return (
    <>
      <Helmet>
        <title>Authentication - Vite React TS Shadcn Boilerplate</title>
      </Helmet>
      <div>
        <Outlet />
      </div>
    </>
  );
}
