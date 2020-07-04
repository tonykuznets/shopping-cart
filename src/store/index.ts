import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { shoppingCardReducer } from './card/reducer';

export const rootReducer = combineReducers({
  shoppingCart: shoppingCardReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools());
