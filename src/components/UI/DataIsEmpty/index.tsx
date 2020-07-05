import React, { FC, memo } from 'react';

import './style.less';

interface IDataIsEmptyProps {}

const DataIsEmpty: FC<IDataIsEmptyProps> = ({}) => (
  <div className={'shopping-cart__data-is-empty'}>Shopping Cart is Empty</div>
);

export default memo(DataIsEmpty);
