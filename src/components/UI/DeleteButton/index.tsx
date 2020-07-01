import React, { FC } from 'react';
import DeleteIcon from './DeleteIcon';
import './style.less';

interface Props {
  onClick: () => void;
}

const DeleteButton: FC<Props> = ({ onClick }) => (
  <button type={'button'} className={'button__delete'} onClick={onClick}>
    <DeleteIcon className={'button__delete--icon'} />
  </button>
);

export default DeleteButton;
