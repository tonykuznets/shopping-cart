import { IShoppingCartItem } from '@src/store/cart/types';

type TAccReduce = {
  total: number;
  quantities: number;
};

export const getAccItemsParams = (items: IShoppingCartItem[]): TAccReduce =>
  items.reduce(
    (acc: TAccReduce, item: IShoppingCartItem) => {
      acc.total += +item.quantity * item.price;
      acc.quantities += item.quantity;

      return acc;
    },
    {
      total: 0,
      quantities: 0,
    },
  );
