import React, { FC, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { ISettings, IShoppingCartItem } from '@src/store/cart/types';
import { formatCost } from '@src/libs/formatCost';
import {
  getShoppingCartItems,
  getShoppingCartSettings,
} from '@src/libs/selectors';
import Typography from '@UI/Typography';

import './style.less';
import { RootState } from '@src/store';

interface ITotalPriceProps {}

const TotalPrice: FC<ITotalPriceProps> = ({}) => {
  const items = useSelector(getShoppingCartItems);
  const settings = useSelector<RootState, ISettings>(getShoppingCartSettings);
  const total = useMemo(
    () =>
      items.reduce(
        (acc: number, item: IShoppingCartItem) =>
          (acc += +item.quantity * item.price),
        0,
      ),
    [items],
  );

  return (
    <section className={'shoppin-cart__total'}>
      <Typography type={'totalCost'}>
        Total price:{' '}
        <span data-testid={'ShoppingCart_TotalPrice'} data-total={total}>
          {formatCost(total)} {settings.postFixCost || ''}
        </span>
      </Typography>
    </section>
  );
};

export default TotalPrice;
