import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import objJSON from './JSON/items.json';
import { setItems } from './store/card/actions';
import ShoppingCart from './components/ShoppingCart';

interface Props {}

const App: FC<Props> = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setItems(JSON.parse(JSON.stringify(objJSON)).items));
  }, []);

  return (
    <div>
      <ShoppingCart settings={{ title: 'Shopping Cart', postFixCost: '$' }} />
    </div>
  );
};

export default App;
