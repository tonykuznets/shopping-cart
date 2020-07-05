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
    expect(
      getByTestId('ShoppingCart_TotalPrice').getAttribute('data-total'),
    ).toEqual('0');

    //If can see form inputs name and price
    expect(getByTestId('AddItemForm__name')).toBeVisible();
    expect(getByTestId('AddItemForm__price')).toBeVisible();

    //Clear input name price and set value
    await userEvent.clear(getByTestId('AddItemForm__price'));
    await userEvent.type(getByTestId('AddItemForm__price'), '10');
    await waitFor(() =>
      expect(getByTestId('AddItemForm__price')).toHaveValue(10),
    );

    //Clear input name 'name' and set value
    await userEvent.clear(getByTestId('AddItemForm__name'));
    await userEvent.type(getByTestId('AddItemForm__name'), 'item name');
    await waitFor(() =>
      expect(getByTestId('AddItemForm__name')).toHaveValue('item name'),
    );

    //Form submit on click button and add item in store
    await userEvent.click(getByTestId('AddItemForm__button'));

    //If successfully added item to store we check the counter
    await waitFor(() =>
      expect(
        container.querySelector('[data-testid="ShoppingCartItem_Counter"]'),
      ).toBeVisible(),
    );

    //Click counter increment
    await userEvent.click(getByTestId('ShoppingCartItem_Counter_inc'));
    await waitFor(() =>
      expect(getByTestId('ShoppingCartItem_Counter_result')).toContainHTML('2'),
    );

    await waitFor(() =>
      expect(
        container.querySelector('[data-testid="ShoppingCartItem__price"]'),
      ).toContainHTML('20.0'),
    );

    //Click counter decrement
    await userEvent.click(getByTestId('ShoppingCartItem_Counter_dec'));
    await waitFor(() =>
      expect(getByTestId('ShoppingCartItem_Counter_result')).toContainHTML('1'),
    );

    await waitFor(() =>
      expect(
        container.querySelector('[data-testid="ShoppingCartItem__price"]'),
      ).toContainHTML('10.0'),
    );

    //If add item we have delete him from redux
    await userEvent.click(getByTestId('AddItemForm__button_delete'));

    await waitFor(() =>
      expect(
        container.querySelector('[data-testid="ShoppingCartItem_Counter"]'),
      ).toBeNull(),
    );

    //If item remove we dont have this counter
    await waitFor(() =>
      expect(
        container.querySelector('[data-testid="ShoppingCartItem_Counter"]'),
      ).toBeNull(),
    );
  });
});
