import React, { FC } from 'react';
import './style.less';

interface Props {
  type: string;
}

const Typography: FC<Props> = ({ type, children }) => <p className={type}>{children}</p>;

export default Typography;
