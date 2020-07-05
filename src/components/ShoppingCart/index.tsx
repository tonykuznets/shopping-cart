import React, { FC, useCallback, useEffect, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '@src/store';
import { changeCount, deleteItem, setSettings } from '@src/store/cart/actions';
import { IShoppingCartItem, ISettings } from '@src/store/cart/types';
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
  const items = useSelector<RootState, IShoppingCartItem[]>(
    getShoppingCartItems,
  );

  useEffect(() => {
    dispatch(setSettings(settings));
  }, []);

  const handleChangeCount = useCallback(
    (id: number | string, count: number) => dispatch(changeCount(id, count)),
    [],
  );

  const handleRemove = useCallback(
    (id: number | string) => dispatch(deleteItem(id)),
    [],
  );

  return (
    <ErrorBoundary>
      <main className={'shopping-cart'} data-testid={'ShoppingCart'}>
        <Typography type={'h1'}>{settings.title}</Typography>
        {!items.length && <DataIsEmpty />}
        {!!items.length &&
          items.map((item: IShoppingCartItem) => (
            <Item
              key={item.id}
              item={item}
              handleChangeCount={handleChangeCount}
              handleRemove={handleRemove}
            />
          ))}
        <AddItemForm />
        <TotalPrice />
        <section className={'shopping-cart__submit'}>
          <Button type={'button'} onClick={() => handleSubmit(items)}>
            Checkout
          </Button>
        </section>
      </main>
    </ErrorBoundary>
  );
};

export default memo(ShoppingCart);
