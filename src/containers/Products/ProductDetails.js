import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
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
  ButtonContainer,
} from './ProductDetailsStyled';
import Loading from '../../components/Loading/Loading';
import useGAEventTracker from '../../utils/useGAEventTracker';
import ReactGA from 'react-ga4';
import { gaKey, gtmKey } from '../../constants/ga_gtm';
// ReactGA.plugin.require('ec');

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
    const { _id, name, price, countInStock, imageUrl } = product;

    ReactGA.event({
      category: 'add_to_cart',
      action: 'Add product',
      label: `${_id}`,
      value: price,
    });

    ReactGA.set({
      daaataa: 'add_to_dadatatata',
    });

    ReactGA.ga('set', 'currencyCode', 'USD');
    // ReactGA.plugin.execute('ec', 'setAction', 'purchase', {
    //   id: 123,
    //   affiliation: 'storeName',
    //   revenue: Number(1111111),
    //   shipping: Number(22222222),
    //   tax: Number(3333333333333) + Number(4444444444444) + Number(55555555555555555),
    //   productId: _id,
    //   qty,
    //   name,
    //   price,
    //   countInStock,
    //   imageUrl,
    // });

    dispatch(
      addToCart({
        productId: _id,
        qty,
        name,
        price,
        countInStock,
        imageUrl,
      }),
    );

    history.push(LINK.TO.CART);
  };

  const deleteHandler = () => {
    dispatch(deleteProduct(product._id));
    history.push(LINK.TO.PRODUCTS);
  };

  const GAEventsTracker = useGAEventTracker('Category TEST');

  return (
    <Container loading={loading}>
      {loading ? (
        <Loading type='ThreeDots' color='cadetblue' height={80} width={80}></Loading>
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
              <button onClick={() => GAEventsTracker('action_test', 'label_test')}>TEST</button>
              <Link to={'/cart'} onClick={() => GAEventsTracker('test_cart', `/cart/777`)}>
                buttonText
              </Link>
              <a
                href='www.examplewebsite.co.uk/pdf/company_brochure.pdf'
                onClick="ga('send', 'event', 'PDF','Download', 'Company Brochure – PDF Download');">
                Download Our Brochure
              </a>
              <button
                onClick="gtag('event', 'add_to_cart', {
                            currency: 'USD',
                            value: 7.77,
                            items: [{
                              item_id: 'SKU_12345',
                              item_name: 'Stan and Friends Tee',
                            }]
                            });"></button>
              <button
                onClick="gtag('event', 'screen_view', {
                          'app_name': 'myAppName',
                          'screen_name': 'Home'
                });">
                Event
              </button>
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
  history: PropTypes.object.isRequired,
};

export default ProductDetails;
