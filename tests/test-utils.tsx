import '@testing-library/jest-dom';
import React, { ReactElement, ReactNode } from 'react';
import { render as rtlRender } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from '../src/store';

function render(
  ui: ReactElement,
  {
    initialState: object = {},
    store = createStore(rootReducer, {}),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }: { children: ReactNode }): ReactElement {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, {
    wrapper: Wrapper as React.ComponentType,
    ...renderOptions,
  });
}

export * from '@testing-library/react';

export { render };
