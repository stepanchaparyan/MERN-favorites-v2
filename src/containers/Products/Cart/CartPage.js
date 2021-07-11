import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import CartItem from './CartItem';
import { addToCart, removeFromCart } from '../../../redux/actions/cartActions';
import { LINK } from '../../../constants';
import {
  Container,
  CartsContainer,
  PageTitle,
  EmptyCart,
  Checkout,
  Info,
  ButtonContainer,
  ButtonStyled
} from './CartPageStyled';

const CartPage = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const carts = useSelector(state => state.carts);
  const { cartItems } = carts;

  useEffect(() => {
    localStorage.setItem('from', pathname);
  }, []);

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
        <CartsContainer>
          {!cartItems?.length ? (
            <EmptyCart>
              Your Cart Is Empty <Link to={LINK.TO.HOME}>Go Back</Link>
            </EmptyCart>
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
        </CartsContainer>
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

export default CartPage;
