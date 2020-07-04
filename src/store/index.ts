import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { shoppingCardReducer } from './card/reducer';

const rootReducer = combineReducers({
  shoppingCardReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
