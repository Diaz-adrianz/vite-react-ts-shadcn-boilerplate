import { RouterProvider } from 'react-router-dom';
import router from './router';
import { ThemeProvider } from './components/molecules/providers';
import { Toast } from './components/atoms';

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <RouterProvider router={router} />
      <Toast />
    </ThemeProvider>
  );
}

export default App;
