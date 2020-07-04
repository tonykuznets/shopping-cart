import React, { FC } from 'react';

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

const Input: FC<IInputProps> = ({ type, name, value, required, tabIndex, onChange, params }) => (
  <label htmlFor={name} className={'form___input'}>
    <span className={'label'}>
      {name} {required && <span className={'required'}>*</span>}
    </span>
    <input
      type={type}
      name={name}
      placeholder={name}
      value={value}
      onChange={onChange}
      required={required}
      tabIndex={tabIndex}
      autoComplete={'off'}
      autoCorrect={'off'}
      {...params}
    />
  </label>
);

export default Input;
