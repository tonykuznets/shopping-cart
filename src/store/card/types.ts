export interface Items {
  name: string;
  price: number;
  quantity: number;
}

export interface CardState {
  items: Items[];
}

export enum CardActionTypes {
  GET_ITEMS = '@@card/GET_ITEMS',
}
