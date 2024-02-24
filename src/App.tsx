import { RouterProvider } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import createRouter from './router';
import createStore from './store';
import { StoreProvider } from './providers/store.provider';
import { Toaster } from './components/ui/toaster';
import { TooltipProvider } from './components/ui/tooltip';
import { ThemeProvider } from './providers/theme';

function App() {
  return (
    <ReduxProvider store={createStore()}>
      <StoreProvider>
        <ThemeProvider defaultTheme="system" storageKey="theme-mode">
          <TooltipProvider>
            <RouterProvider router={createRouter()} />;
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </StoreProvider>
    </ReduxProvider>
  );
}

export default App;
