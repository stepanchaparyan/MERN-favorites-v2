import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product';
import { getProducts, addProduct } from '../redux/actions/productActions';
import {
  Container,
  Title,
  Context,
  LinkContainer,
  StyledLink,
  Text,
  CardCount
} from './HomeScreenStyled';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  const productsList = useSelector(state => state.products);
  const { products, loading, error } = productsList;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const prod = {
    name: 'namep',
    description: 'desp',
    price: 1,
    countInStock: 1,
    imageUrl: 'imageUrlp'
  };

  useEffect(() => {
    // dispatch(addProduct(prod));
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Latest Products</Title>
      <LinkContainer>
        <StyledLink to="/cart">
          <Text>Cart</Text>
          <CardCount>{getCartCount()}</CardCount>
        </StyledLink>
      </LinkContainer>
      <Context>
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map(product => (
            <Product
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
            />
          ))
        )}
      </Context>
    </Container>
  );
};

export default HomeScreen;
