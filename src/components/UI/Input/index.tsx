import React, { FC, memo } from 'react';

import './style.less';

interface IInputProps {
  type: string;
  name: string;
  value: string | number;
  required: boolean;
  tabIndex: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  params?: any;
}

const Input: FC<IInputProps> = ({
  type,
  name,
  value,
  required,
  tabIndex,
  onChange,
  params,
}) => (
  <div className={'shopping-cart__field'}>
    <label htmlFor={name} className={'shopping-cart__field__label'}>
      {name}{' '}
      {required && <span className={'shopping-cart__field__required'}>*</span>}
    </label>
    <input
      type={type}
      name={name}
      placeholder={'Enter the ' + name}
      value={value || ''}
      onChange={onChange}
      required={required}
      tabIndex={tabIndex}
      autoComplete={'off'}
      autoCorrect={'off'}
      className={'shopping-cart__field__input'}
      {...params}
    />
  </div>
);

export default memo(Input);
