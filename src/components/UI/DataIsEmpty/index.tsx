import React, { FC } from 'react';
import './style.less';

interface Props {}

const DataIsEmpty: FC<Props> = ({}) => <div className={'cart__isEmpty'}>Shopping Cart is Empty</div>;

export default DataIsEmpty;
