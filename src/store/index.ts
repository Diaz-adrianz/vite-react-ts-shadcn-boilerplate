import { combineReducers, configureStore } from '@reduxjs/toolkit';
import generalReducer from './general.store';
import loadingReducer from './loading.store';

const rootReducer = combineReducers({
  general: generalReducer,
  loading: loadingReducer,
});

export type State = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
