import { IShoppingCartItem } from 'src/store/card/types';
import { RootState } from '../store';

export const getShoppingCartItems = (state: RootState): IShoppingCartItem[] => state.shoppingCart.items;
