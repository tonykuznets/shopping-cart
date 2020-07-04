import React from 'react';
import '@testing-library/jest-dom';
import { render } from 'tests/test-utils';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import ShoppingCart from './index';
import { settings } from '../../App';
import { waitFor } from '@testing-library/react';

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

    userEvent.type(getByTestId('AddItemForm__price'), '10');
    await waitFor(() => expect(getByTestId('AddItemForm__price')).toHaveValue(10));

    userEvent.type(getByTestId('AddItemForm__quantity'), '2');
    await waitFor(() => expect(getByTestId('AddItemForm__quantity')).toHaveValue(2));

    userEvent.type(getByTestId('AddItemForm__name'), 'item name');
    await waitFor(() => expect(getByTestId('AddItemForm__name')).toHaveValue('item name'));
  });
});
