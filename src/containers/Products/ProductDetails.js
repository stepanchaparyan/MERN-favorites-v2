import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getProductDetails, deleteProduct } from '../../redux/actions/productActions';
import { addToCart } from '../../redux/actions/cartActions';
import { LINK } from '../../constants';
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
} from './ProductDetailsStyled';
import Loading from '../../components/Loading/Loading';

const ProductDetails = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const productDetails = useSelector(state => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
      localStorage.setItem('from', pathname);
    }
  }, [dispatch, match, product]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    history.push(LINK.TO.CART);
  };

  const deleteHandler = () => {
    dispatch(deleteProduct(product._id));
    history.push(LINK.TO.PRODUCTS);
  };

  return (
    <Container loading={loading}>
      {loading ? (
        <Loading type="ThreeDots" color="cadetblue" height={80} width={80}></Loading>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <ImageContainer>
            <Image src={product.imageUrl} alt={product.name} />
          </ImageContainer>
          <InfoContainer>
            <Name>{product.name}</Name>
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
              <StyledButton onClick={addToCartHandler}>Add To Cart</StyledButton>
              <StyledButton onClick={deleteHandler}>Delete product</StyledButton>
            </ButtonContainer>
          </CartContainer>
        </>
      )}
    </Container>
  );
};

ProductDetails.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default ProductDetails;
