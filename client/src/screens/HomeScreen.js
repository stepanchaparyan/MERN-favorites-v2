import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product';
import { getProducts, addProduct } from '../redux/actions/productActions';
import { Container, Title, Context } from './HomeScreenStyled';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productsList = useSelector(state => state.products);
  const { products, loading, error } = productsList;

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
