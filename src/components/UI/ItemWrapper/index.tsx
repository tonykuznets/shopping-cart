import React, { FC, memo } from 'react';
import './style.less';

interface IItemWrapper {}

const ItemWrapper: FC<IItemWrapper> = ({ children }) => (
  <article className={'shopping-cart__item-wrapper'}>{children}</article>
);

export default memo(ItemWrapper);
