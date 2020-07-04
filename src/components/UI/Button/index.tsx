import React, { FC } from 'react';
import './style.less';

interface Props {
  onClick: () => void;
}

const Button: FC<Props> = ({ onClick, children }) => (
  <button type={'button'} className={'cart__button--submit'} onClick={() => onClick()}>
    {children}
  </button>
);

export default Button;
