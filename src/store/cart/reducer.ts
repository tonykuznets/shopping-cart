import {
  SET_SETTINGS,
  SET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  CHANGE_COUNT,
} from '@src/libs/types';
import {
  ShoppingCartState,
  ShoppingCartActionTypes,
  IShoppingCartItem,
} from './types';

const initialState: ShoppingCartState = {
  items: [],
  settings: { title: 'Shopping Cart', postFixCost: '$' },
};

export const shoppingCartReducer = (
  state = initialState,
  action: ShoppingCartActionTypes,
): ShoppingCartState => {
  let items = null;

  switch (action.type) {
    case SET_SETTINGS:
      return { ...state, settings: action.payload.settings };
    case SET_ITEMS:
      return { ...state, items: action.payload.items };
    case ADD_ITEM:
      items = [action.payload.item, ...state.items];
      return { ...state, items };
    case DELETE_ITEM:
      items = state.items.filter(
        (item: IShoppingCartItem) => item.id !== action.payload.id,
      );
      return { ...state, items };
    case CHANGE_COUNT: {
      const { id, count } = action.payload;
      items = [...state.items];

      for (let i = 0; i < items.length; i++) {
        if (+items[i].id === +id) {
          items[i] = { ...items[i], quantity: +items[i].quantity + count };
        }
      }

      return { ...state, items };
    }
    default:
      return state;
  }
};
