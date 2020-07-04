import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import objJSON from './JSON/items.json';
import { setItems } from './store/card/actions';
import ShoppingCart from './components/ShoppingCart';
import { IShoppingCartItem } from './store/card/types';

interface Props {}

const App: FC<Props> = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setItems(JSON.parse(JSON.stringify(objJSON)).items));
  }, []);

  function handleSubmit(items: IShoppingCartItem[]) {
    console.log(items);
  }

  return (
    <div>
      <ShoppingCart settings={{ title: 'Shopping Cart', postFixCost: '$' }} handleSubmit={handleSubmit} />
    </div>
  );
};

export default App;
