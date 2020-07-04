import React, { FC } from 'react';

import Cost from '@UI/Cost';
import { IShoppingCartItem } from '../../store/card/types';
import './style.less';
import Typography from '@UI/Typography';
import { formatCost } from '../../libs/formatCost';

interface ITotalProps {
  items: IShoppingCartItem[];
}

const Total: FC<ITotalProps> = ({ items }) => {
  const total = items.reduce((acc: number, item: IShoppingCartItem) => (acc += +item.price * item.quantity), 0);

  return (
    <section className={'card__total'}>
      <Typography type={'totalCost'}>Total price: {formatCost(total)}</Typography>
    </section>
  );
};

export default Total;
