import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from './CardItem';
import { addToCart, removeFromCart } from '../../../redux/actions/cartActions';
import { LINK } from '../../../constants';
import {
  Container,
  CardsContainer,
  PageTitle,
  EmptyCard,
  Checkout,
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
    <Container>
      <PageTitle>Shopping Cart</PageTitle>
      <>
        <CardsContainer>
          {!cartItems?.length ? (
            <EmptyCard>
              Your Cart Is Empty <Link to={LINK.TO.HOME}>Go Back</Link>
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
        </CardsContainer>
        <Checkout>
          <Info>
            <p>Subtotal ({getCartCount()}) items</p>
            <p>${getCartSubTotal()}</p>
          </Info>
          <ButtonContainer>
            <ButtonStyled>Proceed To Checkout</ButtonStyled>
          </ButtonContainer>
        </Checkout>
      </>
    </Container>
  );
};

export default CardPage;
