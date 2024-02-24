import { State } from '@/store';
import { UnknownAction } from '@reduxjs/toolkit';
import { ReactNode, createContext, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

type ContextProps = {
  state?: State;
  dispatch: (action: UnknownAction) => void;
};

export const StoreContext = createContext<ContextProps>({
  state: undefined,
  dispatch: () => {},
});

export const useStore = () => {
  return useContext(StoreContext);
};

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const dispatcher = useDispatch();

  const state = useSelector((state: State) => state);

  const dispatch = (action: UnknownAction) => {
    dispatcher(action);
  };

  return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>;
};
