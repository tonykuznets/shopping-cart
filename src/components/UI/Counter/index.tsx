import React, { FC } from 'react';
import './style.less';

interface Props {
  count: number;
  onClick: (count: number) => void;
}

const Counter: FC<Props> = ({ count, onClick }) => (
  <div className={'cart__counter'}>
    <button type={'button'} disabled={count <= 1} className={'cart__counter__button'} onClick={() => onClick(-1)}>
      -
    </button>
    <div className={'cart__counter__count'}>{count}</div>
    <button type={'button'} className={'cart__counter__button'} onClick={() => onClick(+1)}>
      +
    </button>
  </div>
);

export default Counter;
