import { useState } from 'react';
import { useQuery } from 'react-query';
// Components
import Item from './item/Item';
import { Drawer, LinearProgress, Grid, Badge } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
// Styles
import { Wrapper, StyledButton } from './App.styles';

// Interface
export interface CartItemType {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

const getProducts = async () =>
  await (await fetch('https://fakestoreapi.com/products')).json();

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
  );
  console.log(data);

  const getTotalItems = (items: CartItemType[]) => null;
  const handleAddToCart = (clickedItem: CartItemType) => null;
  const handleRemoveFromCart = () => null;

  if (isLoading) return <LinearProgress />;
  if (error)
    return (
      <>
        <p>Something went wrong!</p>
      </>
    );

  return (
    <Wrapper>
      <Drawer
        anchor='right'
        open={cartOpen}
        onClose={() => setCartOpen(false)}
      ></Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color='error'></Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart}></Item>
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default App;
