import { RouterProvider } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import createRouter from './router';
import createStore from './store';
import { StoreProvider } from './providers/store.provider';
import { Toaster } from './components/ui/toaster';
import { TooltipProvider } from './components/ui/tooltip';
import { ThemeProvider } from './providers/theme.provider';
import { EventsProvider } from './providers/events.provider';

function App() {
  return (
    <ReduxProvider store={createStore()}>
      <StoreProvider>
        <EventsProvider>
          <ThemeProvider defaultTheme="system" storageKey="theme-mode">
            <TooltipProvider>
              <RouterProvider router={createRouter()} />;
              <Toaster />
            </TooltipProvider>
          </ThemeProvider>
        </EventsProvider>
      </StoreProvider>
    </ReduxProvider>
  );
}

export default App;
