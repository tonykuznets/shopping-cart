import React, { FC } from 'react';
import './style.less';

interface Props {
  onClick: () => void;
}

const Button: FC<Props> = ({ onClick, children }) => (
  <button type={'button'} className={'button__submit'} onClick={() => onClick()}>
    {children}
  </button>
);

export default Button;
