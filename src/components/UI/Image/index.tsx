import React, { FC, memo } from 'react';

import './style.less';

interface IImageProps {
  alt: string;
  src?: string;
}

const Image: FC<IImageProps> = ({ alt, src }) => (
  <img
    alt={alt}
    src={src || 'https://via.placeholder.com/150/EFEFEF'}
    className={'shopping-cart__image'}
  />
);

export default memo(Image);
