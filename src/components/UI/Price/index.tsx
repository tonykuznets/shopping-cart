import React, { FC, useMemo, memo } from 'react';

import Typography from '@UI/Typography';
import { getShoppingCartSettings } from '@src/libs/selectors';
import { formatCost } from '@src/libs/formatCost';
import { useSelector } from 'react-redux';
import { RootState } from '@src/store';
import { ISettings } from '@src/store/cart/types';

interface IPriceProps {
  price: number | string;
  quantity: number | string;
}

const Price: FC<IPriceProps> = ({ quantity, price }) => {
  const settings = useSelector<RootState, ISettings>(getShoppingCartSettings);
  const cost = useMemo(() => +quantity * +price, [quantity, price]);

  return (
    <Typography type={'cost'}>
      <span data-testid={'ShoppingCartItem__price'}>{formatCost(cost)}</span>{' '}
      {settings.postFixCost || ''}
    </Typography>
  );
};

export default memo(Price);
