export interface IShoppingCartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface ShoppingCardState {
  items: IShoppingCartItem[];
  totalCost: number;
}

export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const CHANGE_COUNT = 'CHANGE_COUNT';

interface AddItemAction {
  type: typeof ADD_ITEM;
  payload: {
    item: IShoppingCartItem;
  };
}

interface DeleteItemAction {
  type: typeof DELETE_ITEM;
  payload: {
    id: number;
  };
}

interface ChangeCountAction {
  type: typeof CHANGE_COUNT;
  payload: {
    id: number;
    count: number;
  };
}

export type ShoppingCardActionTypes = AddItemAction | DeleteItemAction | ChangeCountAction;
