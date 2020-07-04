import { ADD_ITEM, SET_ITEMS, CHANGE_COUNT, DELETE_ITEM, SET_SETTINGS } from '../../libs/types';

export interface IShoppingCartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface ISettings {
  title: string;
  postFixCost: string;
}

export interface ShoppingCardState {
  items: IShoppingCartItem[];
  recommendedItems: IShoppingCartItem[];
  settings: ISettings;
  totalCost: number;
}

interface SetItemsAction {
  type: typeof SET_ITEMS;
  payload: {
    items: IShoppingCartItem[];
  };
}

interface SetSettingsAction {
  type: typeof SET_SETTINGS;
  payload: {
    settings: ISettings;
  };
}

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

export type ShoppingCardActionTypes =
  | SetItemsAction
  | SetSettingsAction
  | AddItemAction
  | DeleteItemAction
  | ChangeCountAction;
