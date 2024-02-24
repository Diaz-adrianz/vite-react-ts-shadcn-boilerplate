import { RouterProvider } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import createRouter from './router';
import createStore from './store';
import { StoreProvider } from './providers/store.provider';

function App() {
  return (
    <ReduxProvider store={createStore()}>
      <StoreProvider>
        <RouterProvider router={createRouter()} />;
      </StoreProvider>
    </ReduxProvider>
  );
}

export default App;
