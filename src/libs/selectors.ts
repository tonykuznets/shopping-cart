import { IShoppingCartItem } from 'src/store/card/types';
import { RootState } from '../store';

export const getItems = (state: RootState): IShoppingCartItem[] => state.shoppingCardReducer.items;
export const getRecommendedItems = (state: RootState): IShoppingCartItem[] =>
  state.shoppingCardReducer.recommendedItems;
