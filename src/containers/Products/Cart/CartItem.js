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
  CartPrice,
  CartStatus,
  SelectContainer,
  StyledSelect,
  ButtonContainer,
  StyledButton
} from './CartItemStyled';

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
  const { imageUrl, name, price, countInStock, qty, product } = item;
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
        <CartPrice>
          Price:<span>${price}</span>
        </CartPrice>
        <CartStatus>
          Status:<span>{countInStock > 0 ? 'In Stock' : 'Out of Stock'}</span>
        </CartStatus>
        <SelectContainer>
          Qty
          <StyledSelect value={qty} onChange={e => qtyChangeHandler(product, e.target.value)}>
            {[...Array(countInStock).keys()].map(x => (
              <option key={x + 1} value={x + 1}>
                {x + 1}
              </option>
            ))}
          </StyledSelect>
        </SelectContainer>
        <ButtonContainer>
          <StyledButton onClick={() => removeHandler(product)}>Remove from Cart</StyledButton>
        </ButtonContainer>
      </CartContainer>
    </Container>
  );
};

CartItem.propTypes = {
  item: PropTypes.object,
  qtyChangeHandler: PropTypes.func,
  removeHandler: PropTypes.func
};

CartItem.defaultProps = {
  item: {},
  qtyChangeHandler: () => {},
  removeHandler: () => {}
};

export default CartItem;
