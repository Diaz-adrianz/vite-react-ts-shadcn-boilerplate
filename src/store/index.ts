import { combineReducers, configureStore } from '@reduxjs/toolkit';
import generalReducer from './general.store';

const rootReducer = combineReducers({
  general: generalReducer,
});

export type State = ReturnType<typeof rootReducer>;

const createStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export default createStore;
