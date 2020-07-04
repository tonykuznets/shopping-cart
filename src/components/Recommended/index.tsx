import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getRecommendedItems, getItems } from '../../libs/selectors';
import { RootState } from '../../store';
import { IShoppingCartItem } from '../../store/card/types';
import RecommendedItem from '../RecommendedItem';
import './style.less';

interface IRecommendedProps {}

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Recommended: FC<IRecommendedProps> = ({}) => {
  const dispatch = useDispatch();
  const recommendedItems = useSelector<RootState>(getItems);

  return (
    <section className={'cart__recommended'}>
      {recommendedItems.map(
        (item: IShoppingCartItem, index: number) => index < 3 && <RecommendedItem key={item.id} item={item} />,
      )}
    </section>
  );
};

export default Recommended;
