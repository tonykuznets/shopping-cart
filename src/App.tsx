import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import items from './JSON/items.json';
import { setItems } from './store/cart/actions';
import ShoppingCart from './components/ShoppingCart';
import { IShoppingCartItem } from './store/cart/types';

interface Props {}

export const settings = { title: 'Shopping Cart', postFixCost: '$' };

const App: FC<Props> = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setItems(items));
  }, []);

  function handleSubmit(items: IShoppingCartItem[]) {
    alert(JSON.stringify(items));
  }

  return (
    <div>
      <ShoppingCart settings={settings} handleSubmit={handleSubmit} />
    </div>
  );
};

export default App;
