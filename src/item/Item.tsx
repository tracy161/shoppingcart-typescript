import { Button } from '@mui/material';
import { CartItemType } from '../App';
import { Wrapper } from './Item.styles';

interface Props {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item = (props: Props) => {
  const { item, handleAddToCart } = props;

  return (
    <Wrapper>
      <img src={item.image} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>{item.price}</h3>
      </div>
      <Button onClick={() => handleAddToCart(item)}>Add To Cart</Button>
    </Wrapper>
  );
};

export default Item;
