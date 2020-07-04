import { SET_SETTINGS, SET_ITEMS, ADD_ITEM, DELETE_ITEM, CHANGE_COUNT } from '../../libs/types';
import { ShoppingCardState, ShoppingCardActionTypes, IShoppingCartItem, ISettings } from './types';

const initialState: ShoppingCardState = {
  items: [],
  recommendedItems: [],
  settings: { title: 'Shopping Cart', postFixCost: '$' },
  totalCost: 0,
};

export const shoppingCardReducer = (state = initialState, action: ShoppingCardActionTypes): ShoppingCardState => {
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
      items = state.items.filter((item: IShoppingCartItem) => item.id !== action.payload.id);
      return { ...state, items };
    case CHANGE_COUNT: {
      items = [...state.items];

      for (let i = 0; i < items.length; i++) {
        if (+items[i].id === +action.payload.id) {
          items[i] = { ...items[i], quantity: +items[i].quantity + action.payload.count };
        }
      }

      return { ...state, items };
    }
    default:
      return state;
  }
};
