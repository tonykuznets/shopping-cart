import React, { FC, memo } from 'react';

import { IShoppingCartItem } from '@src/store/cart/types';
import Counter from '@UI/Counter';
import Price from '@UI/Price';
import Image from '@UI/Image';
import DeleteButton from '@UI/DeleteButton';
import ItemWrapper from '@UI/ItemWrapper';
import Typography from '@UI/Typography';
import './style.less';

interface IShoppingCartItemProps {
  item: IShoppingCartItem;
  handleChangeCount: (id: number | string, count: number) => void;
  handleRemove: (id: number | string) => void;
}

const Item: FC<IShoppingCartItemProps> = ({
  item,
  handleChangeCount,
  handleRemove,
}) => {
  const { id, name, quantity, price } = item;

  return (
    <ItemWrapper>
      <div className={'item__side item__side-left'}>
        <Image alt={name} src={''} />
        <Typography type={'title'}>{name}</Typography>
      </div>
      <div className={'item__side item__side-right'}>
        <Counter id={id} count={quantity} onClick={handleChangeCount} />
        <div className={'item__cost'}>
          <Price quantity={quantity} price={price} />
        </div>
        <DeleteButton id={id} onClick={handleRemove} />
      </div>
    </ItemWrapper>
  );
};

export default memo(Item);
