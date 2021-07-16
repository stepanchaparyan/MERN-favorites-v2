import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import CartItem from './CartItem';
import { getMyCartItems, removeFromCart } from '../../../redux/actions/cartActions';
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
import Loading from '../../../components/Loading/Loading';

const CartPage = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const shopingCart = useSelector(state => state.shopingCart);
  const { cartItems, loading, error } = shopingCart;

  useEffect(() => {
    dispatch(getMyCartItems());
    localStorage.setItem('from', pathname);
  }, [dispatch]);

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
      {loading ? (
        <Loading type="ThreeDots" color="cadetblue" height={80} width={80}></Loading>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <PageTitle>Shopping Cart</PageTitle>
          <>
            <CartsContainer>
              {!cartItems?.length ? (
                <EmptyCart>
                  Your Cart Is Empty <Link to={LINK.TO.HOME}>Go Back</Link>
                </EmptyCart>
              ) : (
                cartItems?.map(item => (
                  <CartItem
                    key={item._id}
                    item={item}
                    removeHandler={() => removeFromCartHandler(item._id)}
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
        </>
      )}
    </Container>
  );
};

export default CartPage;
