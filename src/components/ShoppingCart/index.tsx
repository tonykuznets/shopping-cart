import React, { FC, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '@src/store';
import { changeCount, deleteItem, setSettings } from '@src/store/card/actions';
import { IShoppingCartItem, ISettings } from '@src/store/card/types';
import { getShoppingCartItems } from '@src/libs/selectors';
import ErrorBoundary from '@src/components/ErrorBoundary';
import AddItemForm from '@src/Forms/AddItemForm';
import DataIsEmpty from '@UI/DataIsEmpty';
import Typography from '@UI/Typography';
import Button from '@UI/Button';
import Item from './Item';
import TotalPrice from './TotalPrice';
import './style.less';

interface IShoppingCartProps {
  settings: ISettings;
  handleSubmit: (props: any) => void;
}

const ShoppingCart: FC<IShoppingCartProps> = ({ settings, handleSubmit }) => {
  const dispatch = useDispatch();
  const items = useSelector<RootState, IShoppingCartItem[]>(getShoppingCartItems);

  useEffect(() => {
    dispatch(setSettings(settings));
  }, []);

  const handleChangeCount = useCallback((id: number, count: number) => dispatch(changeCount(id, count)), []);

  const handleRemove = useCallback((id: number) => dispatch(deleteItem(id)), []);

  return (
    <ErrorBoundary>
      <main className={'cart'} data-testid={'ShoppingCart'}>
        <Typography type={'h1'}>{settings.title}</Typography>
        {!items.length && <DataIsEmpty />}
        {!!items.length &&
          items.map((item: IShoppingCartItem) => (
            <Item key={item.id} item={item} handleChangeCount={handleChangeCount} handleRemove={handleRemove} />
          ))}
        <AddItemForm />
        <TotalPrice />
        <section className={'card__total'}>
          <Button type={'button'} onClick={() => handleSubmit(items)}>
            Checkout
          </Button>
        </section>
      </main>
    </ErrorBoundary>
  );
};

export default ShoppingCart;
