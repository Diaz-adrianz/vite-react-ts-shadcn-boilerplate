import { RouterProvider } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { StoreProvider } from './providers/store.provider';
import { Toaster } from './components/ui/toaster';
import { TooltipProvider } from './components/ui/tooltip';
import { ThemeProvider } from './providers/theme.provider';
import { EventsProvider } from './providers/events.provider';
import LoadingOverlay from './components/loading-overlay';
import store from './store';
import router from './router';
import LoadingBar from './components/loading-bar';

function App() {
  return (
    <ReduxProvider store={store}>
      <StoreProvider>
        <EventsProvider>
          <ThemeProvider defaultTheme="system" storageKey="theme-mode">
            <TooltipProvider>
              <RouterProvider router={router} />
              <Toaster />
              <LoadingOverlay />
              <LoadingBar />
            </TooltipProvider>
          </ThemeProvider>
        </EventsProvider>
      </StoreProvider>
    </ReduxProvider>
  );
}

export default App;
