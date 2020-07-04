import React, { FC, memo } from 'react';

import { IShoppingCartItem } from '@/store/card/types';
import Counter from '@UI/Counter';
import Price from '@UI/Price';
import Image from '@UI/Image';
import DeleteButton from '@UI/DeleteButton';
import ItemWrapper from '@UI/ItemWrapper';
import Typography from '@UI/Typography';
import './style.less';

interface IShoppingCartItemProps {
  item: IShoppingCartItem;
  handleChangeCount: (id: number, count: number) => void;
  handleRemove: (id: number) => void;
}

const ShoppingCartItem: FC<IShoppingCartItemProps> = ({ item, handleChangeCount, handleRemove }) => {
  const { id, name, quantity, price } = item;

  return (
    <ItemWrapper>
      <Image alt={name} src={''} />
      <Typography type={'title'}>{name}</Typography>
      <div className={'card__item__side'}>
        <Counter id={id} count={quantity} onClick={handleChangeCount} />
        <div className={'card__item__side__cost'}>
          <Price quantity={quantity} price={price} />
        </div>
        <DeleteButton id={id} onClick={handleRemove} />
      </div>
    </ItemWrapper>
  );
};

export default memo(ShoppingCartItem);
