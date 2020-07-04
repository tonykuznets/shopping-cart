import React, { FC } from 'react';

import Typography from '@UI/Typography';
import { formatCost } from '@/libs/formatCost';

interface ICostProps {
  cost: number;
}

const Cost: FC<ICostProps> = ({ cost }) => <Typography type={'cost'}>{formatCost(cost)}</Typography>;

export default Cost;
