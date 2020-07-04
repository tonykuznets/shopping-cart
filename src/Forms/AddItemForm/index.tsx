import React, { FC, useState, memo } from 'react';

import { IShoppingCartItem } from '@src/store/card/types';
import { addItem } from '@src/store/card/actions';
import Input from '@UI/Input';
import { useDispatch } from 'react-redux';
import Typography from '@UI/Typography';
import Button from '@UI/Button';
import './style.less';

interface Props {}

const initialValues: IShoppingCartItem = { id: new Date().getTime(), name: '', price: 0, quantity: 1 };

const AddItemForm: FC<Props> = ({}) => {
  const [values, setValues] = useState(initialValues);
  const dispatch = useDispatch();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.persist();

    setValues((values: IShoppingCartItem) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    dispatch(addItem({ ...values, id: new Date().getTime() }));

    setValues(initialValues);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Typography type={'h4'}>Add new item</Typography>
      <div className={'cart cart__form'}>
        <div>
          <Input
            type={'text'}
            name={'name'}
            tabIndex={0}
            value={values['name']}
            onChange={handleChange}
            required={true}
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
            }}
          />
        </div>
        <div>
          <Input
            type={'number'}
            name={'quantity'}
            tabIndex={2}
            value={values['quantity']}
            onChange={handleChange}
            required={true}
            params={{
              min: 0,
            }}
          />
        </div>
        <div>
          <Button type={'submit'}>+</Button>
        </div>
      </div>
    </form>
  );
};

export default memo(AddItemForm);
