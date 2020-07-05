import React, { FC, memo } from 'react';

import './style.less';

interface ITypographyProps {
  type: string;
  children: any;
}

const types: any = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  text: 'p',
  title: 'h6',
  description: 'p',
  cost: 'div',
  totalCost: 'div',
};

const Typography: FC<ITypographyProps> = ({ type, children }) => {
  return React.createElement(
    types[type] || 'div',
    { className: 'shopping-cart__' + type },
    children,
  );
};

export default memo(Typography);
