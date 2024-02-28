import { Outlet } from 'react-router-dom';

export default function IndexLayout() {
  return (
    <div className="mx-auto w-screen max-w-screen-lg overflow-x-hidden">
      <div>
        <Outlet />
      </div>
    </div>
  );
}
