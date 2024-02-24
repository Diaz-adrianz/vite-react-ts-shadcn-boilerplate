import { RouterProvider } from 'react-router-dom';
import createRouter from './router';

function App() {
  return <RouterProvider router={createRouter()} />;
}

export default App;
