import { combineReducers, createStore } from 'redux';
import { shoppingCardReducer } from './card/reducer';

const rootReducer = combineReducers({
  shoppingCardReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
