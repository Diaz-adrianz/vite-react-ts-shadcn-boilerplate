import { State } from '@/store';
import { UnknownAction } from '@reduxjs/toolkit';
import { ReactNode, createContext, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

type ContextProps = {
  get?: State;
  set: (action: UnknownAction) => void;
};

export const StoreContext = createContext<ContextProps>({
  get: undefined,
  set: () => {},
});

export const useStore = () => {
  return useContext(StoreContext);
};

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const dispatch = useDispatch();

  const get = useSelector((state: State) => state);

  const set = (action: UnknownAction) => {
    dispatch(action);
  };

  return <StoreContext.Provider value={{ get, set }}>{children}</StoreContext.Provider>;
};
