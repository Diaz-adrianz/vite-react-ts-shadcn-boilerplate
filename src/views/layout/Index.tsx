import { Outlet } from 'react-router-dom';

export default function IndexLayout() {
  return (
    <div className="w-screen overflow-x-hidden max-w-screen-lg mx-auto">
      <div>
        <Outlet />
      </div>
    </div>
  );
}
