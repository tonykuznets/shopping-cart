import {
  ADD_ITEM,
  CHANGE_COUNT,
  DELETE_ITEM,
  SET_SETTINGS,
  SET_ITEMS,
} from '@src/libs/types';
import { IShoppingCartItem, ISettings, ShoppingCartActionTypes } from './types';

export const setItems = (
  items: IShoppingCartItem[],
): ShoppingCartActionTypes => ({
  type: SET_ITEMS,
  payload: { items },
});

export const setSettings = (settings: ISettings): ShoppingCartActionTypes => ({
  type: SET_SETTINGS,
  payload: { settings },
});

export const addItem = (
  newShoppingCartItem: IShoppingCartItem,
): ShoppingCartActionTypes => ({
  type: ADD_ITEM,
  payload: { item: newShoppingCartItem },
});

export const deleteItem = (id: number | string): ShoppingCartActionTypes => ({
  type: DELETE_ITEM,
  payload: {
    id,
  },
});

export const changeCount = (
  id: number | string,
  count: number,
): ShoppingCartActionTypes => ({
  type: CHANGE_COUNT,
  payload: {
    id,
    count,
  },
});
