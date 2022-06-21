import React from 'react';
import PropTypes from 'prop-types';
import { Container, Image, Info, Name, Description, Price, StyledLink } from './ProductStyled';

const Product = ({ imageUrl, description, price, name, productId }) => {
  return (
    <Container>
      <Image src={imageUrl} alt={name} />
      <Info>
        <Name>{name}</Name>
        <Description>{description.substring(0, 100)}...</Description>
        <Price>${price}</Price>
        <StyledLink to={`/product/${productId}`}>View</StyledLink>
      </Info>
    </Container>
  );
};

Product.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  productId: PropTypes.string.isRequired,
};

export default Product;
