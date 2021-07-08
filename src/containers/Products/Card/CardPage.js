import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import CardItem from './CardItem';
import { addToCard, removeFromCard } from '../../../redux/actions/cardActions';
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
  const { pathname } = useLocation();

  const card = useSelector(state => state.card);
  const { cardItems } = card;

  useEffect(() => {
    localStorage.setItem('from', pathname);
  }, []);

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCard(id, qty));
  };

  const removeFromCardHandler = id => {
    dispatch(removeFromCard(id));
  };

  const getCardCount = () => {
    return cardItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCardSubTotal = () => {
    return cardItems.reduce((price, item) => price + item.price * item.qty, 0).toFixed(2);
  };

  return (
    <Container>
      <PageTitle>Shopping Card</PageTitle>
      <>
        <CardsContainer>
          {!cardItems?.length ? (
            <EmptyCard>
              Your Card Is Empty <Link to={LINK.TO.HOME}>Go Back</Link>
            </EmptyCard>
          ) : (
            cardItems.map(item => (
              <CardItem
                key={item.product}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeFromCardHandler}
              />
            ))
          )}
        </CardsContainer>
        <Checkout>
          <Info>
            <p>Subtotal ({getCardCount()}) items</p>
            <p>${getCardSubTotal()}</p>
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
