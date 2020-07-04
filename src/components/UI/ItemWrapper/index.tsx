import React, { FC, memo } from 'react';
import './style.less';

interface IItemWrapper {}

const ItemWrapper: FC<IItemWrapper> = ({ children }) => (
  <article className={'card__item__wrapper'}>{children}</article>
);

export default memo(ItemWrapper);
