import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addItem } from '../../store/card/actions';
import { IShoppingCartItem } from '../../store/card/types';
import Cost from '@UI/Cost';
import Image from '@UI/Image';
import Typography from '@UI/Typography';
import './style.less';
import Button from '@UI/Button';

interface IShoppingCartItemProps {
  item: IShoppingCartItem;
}

const ShoppingCartItem: FC<IShoppingCartItemProps> = ({ item }) => {
  const dispatch = useDispatch();
  const { name, price } = item;

  function addCartItem(item: IShoppingCartItem) {
    dispatch(addItem(item));
  }

  return (
    <div className={'cart__recommended__item'}>
      <Image alt={name} src={''} />
      <Typography type={'title'}>{name}</Typography>
      <Cost cost={+price} />
      <Button onClick={() => addCartItem(item)}>Add</Button>
    </div>
  );
};

export default ShoppingCartItem;
