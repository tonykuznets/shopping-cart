import React, { FC } from 'react';
import './style.less';

interface IImageProps {
  alt: string;
  src?: string;
}

const Image: FC<IImageProps> = ({ alt, src }) => (
  <img alt={alt} src={src || 'https://via.placeholder.com/150/EFEFEF'} className={'card__item__image'} />
);

export default Image;
