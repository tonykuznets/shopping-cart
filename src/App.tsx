import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import DeleteButton from '@UI/DeleteButton';
import Counter from '@UI/Counter';
import Button from '@UI/Button';
import Typography from '@UI/Typography';
import WrapItem from '@UI/WrapItem';
import { shoppingCardReducer } from './store/card/reducer';
import { RootState } from './store';

interface Props {}

const App: FC<Props> = (props) => {
  const items = useSelector<RootState>((state) => state.shoppingCardReducer.items);

  const handleDelete = () => {
    console.log('1');
  };
  const handleCount = (count: number) => {
    console.log(count);
  };

  console.log(props);

  return (
    <div>
      <DeleteButton onClick={() => handleDelete()} />
      <Counter count={0} onClick={handleCount} />
      <Button onClick={() => handleDelete()}>Submit</Button>

      <WrapItem>
        <Typography type={'title'}>Рулетики</Typography>
        <Typography type={'description'}>Рулетики с ананасами и корицей, 16 шт</Typography>
      </WrapItem>

      <Typography type={'text'}>
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I
        will give you a complete account of the system, and expound the actual teachings of the great explorer of the
        truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is
        pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are
        extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because
        it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great
        pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain
        some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has
        no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
      </Typography>
    </div>
  );
};

export default App;
