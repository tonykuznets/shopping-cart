import React, { FC } from 'react';
import DeleteIcon from './DeleteIcon';
import './style.less';

interface Props {
  onClick: () => void;
}

const DeleteButton: FC<Props> = ({ onClick }) => (
  <button type={'button'} className={'cart__button--delete'} onClick={onClick}>
    <DeleteIcon className={'cart__button--delete__icon'} />
  </button>
);

export default DeleteButton;
