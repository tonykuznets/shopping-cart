import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteItem, changeCount } from '../../store/card/actions';
import { IShoppingCartItem } from '../../store/card/types';
import Counter from '@UI/Counter';
import Cost from '@UI/Cost';
import Image from '@UI/Image';
import DeleteButton from '@UI/DeleteButton';
import ItemWrapper from '@UI/ItemWrapper';
import Typography from '@UI/Typography';
import './style.less';

interface IShoppingCartItemProps {
  item: IShoppingCartItem;
}

const ShoppingCartItem: FC<IShoppingCartItemProps> = ({ item }) => {
  const dispatch = useDispatch();
  const { id, name, quantity, price } = item;

  function changeCountItem(count: number) {
    dispatch(changeCount(id, count));
  }

  function deleteCartItem() {
    dispatch(deleteItem(id));
  }

  return (
    <ItemWrapper>
      <Image alt={name} src={''} />
      <Typography type={'title'}>{name}</Typography>
      <div className={'card__item__side'}>
        <Counter count={quantity} onClick={changeCountItem} />
        <div className={'card__item__side__cost'}>
          <Cost cost={+price} />
        </div>
        <DeleteButton onClick={deleteCartItem} />
      </div>
    </ItemWrapper>
  );
};

export default ShoppingCartItem;
