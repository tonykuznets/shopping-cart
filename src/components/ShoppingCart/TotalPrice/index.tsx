import React, { FC, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { ISettings } from '@src/store/cart/types';
import { formatCost } from '@src/libs/formatCost';
import { getShoppingCartSettings } from '@src/libs/selectors';
import Typography from '@UI/Typography';

import './style.less';
import { RootState } from '@src/store';

interface ITotalPriceProps {
  total: number;
}

const TotalPrice: FC<ITotalPriceProps> = ({ total }) => {
  const settings = useSelector<RootState, ISettings>(getShoppingCartSettings);

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
