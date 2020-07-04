import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from 'tests/test-utils';
import '@testing-library/jest-dom/extend-expect';
import ShoppingCart from './index';
import { settings } from '../../App';

describe('ShoppingCart', () => {
  it('Could render with redux init', async () => {
    const { getByTestId, container } = render(
      <ShoppingCart
        settings={settings}
        handleSubmit={() => {
          return;
        }}
      />,
    );

    expect(getByTestId('ShoppingCart')).toBeInTheDocument();
    //Initial total
    expect(getByTestId('ShoppingCart_TotalPrice').getAttribute('data-total')).toEqual('0');

    expect(getByTestId('AddItemForm__name')).toBeVisible();
    expect(getByTestId('AddItemForm__price')).toBeVisible();
    expect(getByTestId('AddItemForm__quantity')).toBeVisible();

    fireEvent.change(getByTestId('AddItemForm__price'), {
      target: { value: 10, valueAsNumber: 10, name: 'price' },
    });
    expect(getByTestId('AddItemForm__price')).toHaveValue(10);

    fireEvent.change(getByTestId('AddItemForm__quantity'), {
      target: { value: 1, valueAsNumber: 1, name: 'quantity' },
    });
    expect(getByTestId('AddItemForm__quantity')).toHaveValue(1);

    fireEvent.change(getByTestId('AddItemForm__name'), {
      target: { value: 'item name', name: 'name' },
    });
    expect(getByTestId('AddItemForm__name')).toHaveValue('item name');
  });

  // it('Change counter', () => {
  //   const { getByTestId } = render(
  //     <ShoppingCart
  //       settings={settings}
  //       handleSubmit={() => {
  //         return;
  //       }}
  //     />,
  //   );
  //
  //   const counter = getByTestId('ShoppingCart_Counter');
  //
  //   expect(counter).toBeInTheDocument();
  // });
});
