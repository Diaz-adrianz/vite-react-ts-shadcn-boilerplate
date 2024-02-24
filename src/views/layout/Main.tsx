import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <>
      <Helmet>
        <title>Welcome - Vite React TS Shadcn Boilerplate</title>
      </Helmet>
      <div>
        <Outlet />
      </div>
    </>
  );
}
