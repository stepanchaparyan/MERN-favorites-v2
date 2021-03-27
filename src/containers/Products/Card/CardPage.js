import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from './CardItem';
import { addToCart, removeFromCart } from '../../../redux/actions/cartActions';
import {
  Container,
  LeftPart,
  CardTitle,
  EmptyCard,
  RightPart,
  Info,
  ButtonContainer,
  ButtonStyled
} from './CardPageStyled';

const CardPage = () => {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  useEffect(() => {}, []);

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = id => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems.reduce((price, item) => price + item.price * item.qty, 0).toFixed(2);
  };

  return (
    <>
      <Container>
        <LeftPart>
          <CardTitle>Shopping Cart</CardTitle>

          {cartItems.length === 0 ? (
            <EmptyCard>
              Your Cart Is Empty <Link to="/">Go Back</Link>
            </EmptyCard>
          ) : (
            cartItems.map(item => (
              <CartItem
                key={item.product}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeFromCartHandler}
              />
            ))
          )}
        </LeftPart>

        <RightPart>
          <Info>
            <p>Subtotal ({getCartCount()}) items</p>
            <p>${getCartSubTotal()}</p>
          </Info>
          <ButtonContainer>
            <ButtonStyled>Proceed To Checkout</ButtonStyled>
          </ButtonContainer>
        </RightPart>
      </Container>
    </>
  );
};

export default CardPage;
