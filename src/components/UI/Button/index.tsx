import React, { FC, memo } from 'react';

import './style.less';

interface IButtonProps {
  type: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
  onClick?: (props: any) => void | undefined;
  children: React.ReactNode | any;
  params?: any;
}

const Button: FC<IButtonProps> = ({
  type,
  disabled = false,
  onClick,
  children,
  params,
}) => (
  <button
    type={type}
    disabled={disabled}
    className={'shopping-cart__button'}
    onClick={onClick}
    {...params}
  >
    {children}
  </button>
);

export default memo(Button);
