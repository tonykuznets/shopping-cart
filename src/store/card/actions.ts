import { ADD_ITEM, CHANGE_COUNT, DELETE_ITEM, SET_SETTINGS, SET_ITEMS } from '../../libs/types';
import { IShoppingCartItem, ISettings, ShoppingCardActionTypes } from './types';

export const setItems = (items: IShoppingCartItem[]): ShoppingCardActionTypes => ({
  type: SET_ITEMS,
  payload: { items },
});

export const setSettings = (settings: ISettings): ShoppingCardActionTypes => ({
  type: SET_SETTINGS,
  payload: { settings },
});

export const addItem = (newShoppingCartItem: IShoppingCartItem): ShoppingCardActionTypes => ({
  type: ADD_ITEM,
  payload: { item: newShoppingCartItem },
});

export const deleteItem = (id: number): ShoppingCardActionTypes => ({
  type: DELETE_ITEM,
  payload: {
    id,
  },
});

export const changeCount = (id: number, count: number): ShoppingCardActionTypes => ({
  type: CHANGE_COUNT,
  payload: {
    id,
    count,
  },
});
