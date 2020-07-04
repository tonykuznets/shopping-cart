import React, { FC } from 'react';

import Typography from '@UI/Typography';
import { formatCost } from '../../../libs/formatCost';

interface Props {
  cost: number;
}

const Cost: FC<Props> = ({ cost }) => <Typography type={'cost'}>{formatCost(cost)}</Typography>;

export default Cost;
