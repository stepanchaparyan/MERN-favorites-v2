import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  ImageContainer,
  Image,
  InfoContainer,
  Name,
  Price,
  CartContainer,
  CartData,
  ButtonContainer,
  StyledButton
} from './CartItemStyled';

const CartItem = ({ item, removeHandler }) => {
  const { imageUrl, name, price, countInStock, qty } = item;
  return (
    <Container>
      <ImageContainer>
        <Image src={imageUrl} alt={name} />
      </ImageContainer>
      <InfoContainer>
        <Name>{name}</Name>
        <Price>Price: ${price}</Price>
      </InfoContainer>
      <CartContainer>
        <CartData>
          Price:<span>${price}</span>
        </CartData>
        <CartData>
          Status:<span>{countInStock > 0 ? 'In Stock' : 'Out of Stock'}</span>
        </CartData>
        <CartData>
          Qty:<span>{qty}</span>
        </CartData>
        <ButtonContainer>
          <StyledButton onClick={removeHandler}>Remove from Cart</StyledButton>
        </ButtonContainer>
      </CartContainer>
    </Container>
  );
};

CartItem.propTypes = {
  item: PropTypes.object,
  removeHandler: PropTypes.func
};

CartItem.defaultProps = {
  item: {},
  removeHandler: () => {}
};

export default CartItem;
