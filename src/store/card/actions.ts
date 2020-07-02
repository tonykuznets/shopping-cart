import { ADD_ITEM, DELETE_ITEM, CHANGE_COUNT, IShoppingCartItem, ShoppingCardActionTypes } from './types';

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
