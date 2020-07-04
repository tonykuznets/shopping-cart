import React, { FC, memo } from 'react';

import './style.less';

interface IButtonProps {
  type: 'button' | 'submit' | 'reset' | undefined;
  onClick?: (props: any) => void | undefined;
  children: React.ReactNode;
}

const Button: FC<IButtonProps> = ({ type, onClick, children }) => (
  <button type={type} className={'button'} onClick={onClick}>
    {children}
  </button>
);

export default memo(Button);
