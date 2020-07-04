import React, { FC } from 'react';
import './style.less';

interface Props {}

const ItemWrapper: FC<Props> = ({ children }) => <article className={'card__item__wrapper'}>{children}</article>;

export default ItemWrapper;
