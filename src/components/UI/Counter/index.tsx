import React, { FC, memo } from 'react';

import './style.less';

interface ICounterProps {
  id: number | string;
  count: number;
  onClick: (id: number | string, count: number) => void;
}

const Counter: FC<ICounterProps> = ({ id, count, onClick }) => (
  <div
    className={'shopping-cart__counter'}
    data-testid={'ShoppingCartItem_Counter'}
  >
    <button
      type={'button'}
      disabled={count <= 1}
      className={'shopping-cart__counter__button'}
      onClick={() => onClick(id, -1)}
      data-testid={'ShoppingCartItem_Counter_dec'}
    >
      -
    </button>
    <div
      className={'shopping-cart__counter__count'}
      data-testid={'ShoppingCartItem_Counter_result'}
    >
      {count}
    </div>
    <button
      type={'button'}
      disabled={count >= 100}
      className={'shopping-cart__counter__button'}
      onClick={() => onClick(id, +1)}
      data-testid={'ShoppingCartItem_Counter_inc'}
    >
      +
    </button>
  </div>
);

export default memo(Counter);
