import React, { FC, useState, memo, useMemo } from 'react';

import { IShoppingCartItem } from '@src/store/cart/types';
import { addItem } from '@src/store/cart/actions';
import Input from '@UI/Input';
import { useDispatch } from 'react-redux';
import Typography from '@UI/Typography';
import Button from '@UI/Button';
import './style.less';

interface Props {}

const initialValues: IShoppingCartItem = {
  id: new Date().getTime(),
  name: '',
  price: 0,
  quantity: 1,
};

const AddItemForm: FC<Props> = ({}) => {
  const [values, setValues] = useState(initialValues);
  const dispatch = useDispatch();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.persist();

    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    dispatch(addItem({ ...values, id: new Date().getTime() }));

    setValues(initialValues);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Typography type={'h4'}>Add new item</Typography>
      <div className={'shopping-cart__form'} id={'ShoppingCart__AddItemForm'}>
        <div>
          <Input
            type={'text'}
            name={'name'}
            tabIndex={0}
            value={values['name']}
            onChange={handleChange}
            required={true}
            params={{
              ['data-testid']: 'AddItemForm__name',
            }}
          />
        </div>
        <div>
          <Input
            type={'number'}
            name={'price'}
            tabIndex={1}
            value={values['price']}
            onChange={handleChange}
            required={true}
            params={{
              min: 0,
              max: 100000,
              ['data-testid']: 'AddItemForm__price',
            }}
          />
        </div>
        <div className={'shopping-cart__form__button-wrap'}>
          <Button
            type={'submit'}
            params={{
              ['data-testid']: 'AddItemForm__button',
            }}
          >
            +
          </Button>
        </div>
      </div>
    </form>
  );
};

export default memo(AddItemForm);
