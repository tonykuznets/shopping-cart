import { Reducer } from 'redux';
import { CardState, CardActionTypes } from './types';

export const initialState: CardState = {
  items: [],
};

const reducer: Reducer<CardState> = (state = initialState, action) => {
  switch (action.type) {
    case CardActionTypes.GET_ITEMS: {
      return { ...state };
    }
    default: {
      return state;
    }
  }
};

export { reducer as cardReducer };
