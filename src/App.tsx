import { RouterProvider } from 'react-router-dom';
import router from './router';
import { ThemeProvider } from './components/molecules/providers';

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
