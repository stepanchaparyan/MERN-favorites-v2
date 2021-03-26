import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  ImageContainer,
  Image,
  CardPrice,
  LinkStyled,
  ButtonStyled
} from './CardItemStyled';

const CardItem = ({ item, qtyChangeHandler, removeHandler }) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={item.imageUrl} alt={item.name} />
      </ImageContainer>
      <LinkStyled to={`/product/${item.product}`}>
        <p>{item.name}</p>
      </LinkStyled>
      <CardPrice>${item.price}</CardPrice>
      <select
        value={item.qty}
        onChange={e => qtyChangeHandler(item.product, e.target.value)}
        className="cartItem__select"
      >
        {[...Array(item.countInStock).keys()].map(x => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>
      <ButtonStyled onClick={() => removeHandler(item.product)}>Delete Card</ButtonStyled>
    </Container>
  );
};

CardItem.propTypes = {
  item: PropTypes.object,
  qtyChangeHandler: PropTypes.func,
  removeHandler: PropTypes.func
};

CardItem.defaultProps = {
  item: {},
  qtyChangeHandler: () => {},
  removeHandler: () => {}
};

export default CardItem;
