import React, { FC, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { IShoppingCartItem } from '@src/store/card/types';
import { formatCost } from '@src/libs/formatCost';
import { getShoppingCartItems } from '@src/libs/selectors';
import Typography from '@UI/Typography';

import './style.less';

interface ITotalPriceProps {}

const TotalPrice: FC<ITotalPriceProps> = ({}) => {
  const items = useSelector(getShoppingCartItems);
  const total = useMemo(
    () => items.reduce((acc: number, item: IShoppingCartItem) => (acc += +item.quantity * item.price), 0),
    [items],
  );

  return (
    <section className={'card__total'}>
      <Typography type={'totalCost'}>Total price: {formatCost(total)}</Typography>
    </section>
  );
};

export default TotalPrice;
