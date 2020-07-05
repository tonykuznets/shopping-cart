import React, { FC, memo } from 'react';

import DeleteIcon from './DeleteIcon';
import './style.less';

interface IDeleteButtonProps {
  id: number | string;
  onClick: (id: number | string) => void;
}

const DeleteButton: FC<IDeleteButtonProps> = ({ id, onClick }) => (
  <button
    type={'button'}
    className={'shopping-cart__button--delete'}
    onClick={() => onClick(id)}
    data-testid={'AddItemForm__button_delete'}
  >
    <DeleteIcon />
  </button>
);

export default memo(DeleteButton);
