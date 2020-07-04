import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getItems } from '../../libs/selectors';
import { RootState } from '../../store';
import { setSettings } from '../../store/card/actions';
import { IShoppingCartItem, ISettings } from '../../store/card/types';
import DataIsEmpty from '@UI/DataIsEmpty';
import Typography from '@UI/Typography';
import ShoppingCartItem from '../ShoppingCartItem';
import Total from '../Total';
import SubmitForm from '../SubmitForm';
import Recommended from '../Recommended';
import './style.less';

interface IShoppingCartProps {
  settings: ISettings;
}

const ShoppingCart: FC<IShoppingCartProps> = ({ settings }) => {
  const dispatch = useDispatch();
  const items = useSelector<RootState>(getItems);

  useEffect(() => {
    dispatch(setSettings(settings));
  }, []);

  return (
    <main className={'cart'}>
      <Typography type={'h1'}>{settings.title}</Typography>
      {!items.length && <DataIsEmpty />}
      {!!items.length && items.map((item: IShoppingCartItem) => <ShoppingCartItem key={item.id} item={item} />)}
      <Recommended />
      <Total items={items} />
      <SubmitForm />
    </main>
  );
};

export default ShoppingCart;
