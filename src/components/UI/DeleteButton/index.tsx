import React, { FC } from 'react';
import DeleteIcon from './DeleteIcon';
import './style.less';

interface IDeleteButtonProps {
  id: number;
  onClick: (id: number) => void;
}

const DeleteButton: FC<IDeleteButtonProps> = ({ id, onClick }) => (
  <button type={'button'} className={'cart__button--delete'} onClick={() => onClick(id)}>
    <DeleteIcon className={'cart__button--delete__icon'} />
  </button>
);

export default DeleteButton;
