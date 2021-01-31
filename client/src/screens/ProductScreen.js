import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getProductDetails } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';
import {
  Container,
  ImageContainer,
  Image,
  InfoContainer,
  Name,
  Price,
  Description,
  CartContainer,
  CartPrice,
  CartStatus,
  StyledSelect,
  StyledButton,
  SelectContainer,
  ButtonContainer
} from './ProductScreenStyled';

const ProductScreen = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector(state => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, match, product]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    history.push('/cart');
  };

  return (
    <Container>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <ImageContainer>
            <Image src={product.imageUrl} alt={product.name} />
          </ImageContainer>
          <InfoContainer>
            <Name>PlayStation 5</Name>
            <Price>Price: ${product.price}</Price>
            <Description>Description: {product.description}</Description>
          </InfoContainer>
          <CartContainer>
            <CartPrice>
              Price:<span>${product.price}</span>
            </CartPrice>
            <CartStatus>
              Status:<span>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</span>
            </CartStatus>
            <SelectContainer>
              Qty
              <StyledSelect value={qty} onChange={e => setQty(e.target.value)}>
                {[...Array(product.countInStock).keys()].map(x => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </StyledSelect>
            </SelectContainer>
            <ButtonContainer>
              <StyledButton type="button" onClick={addToCartHandler}>
                Add To Cart
              </StyledButton>
            </ButtonContainer>
          </CartContainer>
        </>
      )}
    </Container>
  );
};

ProductScreen.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default ProductScreen;
