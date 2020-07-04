import { IShoppingCartItem, ISettings } from 'src/store/cart/types';
import { RootState } from '../store';

export const getShoppingCartItems = (state: RootState): IShoppingCartItem[] =>
  state.shoppingCart.items;
export const getShoppingCartSettings = (state: RootState): ISettings =>
  state.shoppingCart.settings;
