import React, { FC, memo } from 'react';

import './style.less';

interface ICounterProps {
  id: number | string;
  count: number;
  onClick: (id: number | string, count: number) => void;
}

const Counter: FC<ICounterProps> = ({ id, count, onClick }) => (
  <div className={'cart__counter'} data-testid={'ShoppingCart_Counter'}>
    <button
      type={'button'}
      disabled={count <= 1}
      className={'cart__counter__button'}
      onClick={() => onClick(id, -1)}
    >
      -
    </button>
    <div className={'cart__counter__count'}>{count}</div>
    <button
      type={'button'}
      disabled={count >= 100}
      className={'cart__counter__button'}
      onClick={() => onClick(id, +1)}
    >
      +
    </button>
  </div>
);

export default memo(Counter);
