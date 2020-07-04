import React, { FC } from 'react';

import Button from '@UI/Button';

interface ITotalProps {}

const SubmitForm: FC<ITotalProps> = ({}) => {
  return (
    <section className={'card__total'}>
      <Button
        onClick={() => {
          return;
        }}
      >
        Checkout
      </Button>
    </section>
  );
};

export default SubmitForm;
