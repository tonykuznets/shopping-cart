import React, { FC, useMemo } from 'react';

import Typography from '@UI/Typography';
import { formatCost } from '@src/libs/formatCost';

interface IPriceProps {
  price: number | string;
  quantity: number | string;
}

const Price: FC<IPriceProps> = ({ quantity, price }) => {
  const cost = useMemo(() => +quantity * +price, [quantity, price]);

  return <Typography type={'cost'}>{formatCost(cost)}</Typography>;
};

export default Price;
