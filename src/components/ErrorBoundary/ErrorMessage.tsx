import React, { FC } from 'react';
import './style.less';

interface ErrorMessageProps {}

const ErrorMessage: FC<ErrorMessageProps> = ({}) => (
  <div className={'shopping-cart error-message'}>This App has Error!</div>
);

export default ErrorMessage;
