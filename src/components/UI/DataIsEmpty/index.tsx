import React, { FC } from 'react';

import './style.less';

interface IDataIsEmptyProps {}

const DataIsEmpty: FC<IDataIsEmptyProps> = ({}) => <div className={'cart__isEmpty'}>Shopping Cart is Empty</div>;

export default DataIsEmpty;
