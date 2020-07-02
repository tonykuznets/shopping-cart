import {
  ADD_ITEM,
  DELETE_ITEM,
  CHANGE_COUNT,
  ShoppingCardState,
  ShoppingCardActionTypes,
  IShoppingCartItem,
} from './types';

const initialState: ShoppingCardState = {
  items: [],
  totalCost: 0,
};

export const shoppingCardReducer = (state = initialState, action: ShoppingCardActionTypes): ShoppingCardState => {
  let items = null;

  switch (action.type) {
    case ADD_ITEM:
      items = [action.payload.item, ...state.items];
      return { ...state, items };
    case DELETE_ITEM:
      items = state.items.filter((item: IShoppingCartItem) => item.id !== action.payload.id);
      return { ...state, items };
    case CHANGE_COUNT:
      return { ...state };
    default:
      return state;
  }
};
