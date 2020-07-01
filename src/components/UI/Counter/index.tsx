import React, { FC } from 'react';
import './style.less';

interface Props {
  count: number;
  onClick: (count: number) => void;
}

const Counter: FC<Props> = ({ count, onClick }) => (
  <div className={'counter'}>
    <button type={'button'} className={'counter counter__button'} onClick={() => onClick(+1)}>
      +
    </button>
    <div className={'counter counter__count'}>{count}</div>
    <button type={'button'} className={'counter counter__button'} onClick={() => onClick(-1)}>
      -
    </button>
  </div>
);

export default Counter;
