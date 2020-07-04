import React, { FC } from 'react';
import './style.less';

interface Props {
  alt: string;
  src?: string;
}

const Image: FC<Props> = ({ alt, src }) => (
  <img alt={alt} src={src || 'https://via.placeholder.com/150/EFEFEF'} className={'card__item__image'} />
);

export default Image;
