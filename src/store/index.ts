import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { shoppingCartReducer } from './cart/reducer';

export const rootReducer = combineReducers({
  shoppingCart: shoppingCartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools());
