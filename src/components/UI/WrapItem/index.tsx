import React, { FC } from 'react';
import './style.less';

interface Props {}

const WrapItem: FC<Props> = ({ children }) => <div className={'wrapper_item'}>{children}</div>;

export default WrapItem;
