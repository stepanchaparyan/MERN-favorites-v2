import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import { useIntl } from 'react-intl';
import Product from '../components/Product';
import { getProducts, addProduct } from '../redux/actions/productActions';
import {
  Container,
  Context,
  LinkContainer,
  StyledLink,
  FormContainer,
  Text,
  CardCount,
  FormStyled,
  FieldStyled,
  ErrorMessages,
  AddProduct
} from './HomeScreenStyled';
import CustomModal from '../components/Modal/Modal';
import ModalFooter from '../components/Modal/ModalFooter';
import theme from '../styles/theme';
import productsFormikProps from './ProductsFormikProps';
import { FORM } from '../constants';
import localization from './localization';

const { INPUT } = FORM;
const { cadetblue } = theme;

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { formatMessage } = useIntl();
  const [isOpen, setIsOpen] = useState(false);

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  const productsList = useSelector(state => state.products);
  const { products, loading, error } = productsList;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const onSubmit = (isValid, values) => {
    if (isValid) {
      dispatch(addProduct(values));
      setIsOpen(!isOpen);
    }
  };

  const { validationSchema, initialValues } = useMemo(() => productsFormikProps(), [
    validationSchema,
    initialValues
  ]);

  return (
    <Container>
      <AddProduct onClick={toggleOpen}>{formatMessage(localization.addProduct)}</AddProduct>
      <LinkContainer>
        <StyledLink to="/cart">
          <Text>Cart</Text>
          <CardCount>{getCartCount()}</CardCount>
        </StyledLink>
      </LinkContainer>
      <Context>
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map(product => (
            <Product
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
            />
          ))
        )}
      </Context>
      <CustomModal
        modalIsOpen={isOpen}
        closeModal={toggleOpen}
        title={formatMessage(localization.addProduct)}
        titleBgColor={cadetblue}
        isBigSize
        shouldShowFooter={false}
      >
        <FormContainer>
          <Formik initialValues={initialValues} validationSchema={validationSchema}>
            {({ values, isValid }) => {
              return (
                <>
                  <FormStyled>
                    <FieldStyled
                      type={INPUT.TYPE.TEXT}
                      name={INPUT.NAME.NAME}
                      id={INPUT.NAME.NAME}
                      placeholder={formatMessage(localization.name)}
                    />
                    <ErrorMessage name={INPUT.NAME.NAME} component={ErrorMessages} />
                    <FieldStyled
                      type={INPUT.TYPE.TEXT}
                      name={INPUT.NAME.DESCRIPTION}
                      id={INPUT.NAME.DESCRIPTION}
                      placeholder={formatMessage(localization.description)}
                    />
                    <ErrorMessage name={INPUT.NAME.DESCRIPTION} component={ErrorMessages} />
                    <FieldStyled
                      type={INPUT.TYPE.TEXT}
                      name={INPUT.NAME.PRICE}
                      id={INPUT.NAME.PRICE}
                      placeholder={formatMessage(localization.price)}
                    />
                    <ErrorMessage name={INPUT.NAME.PRICE} component={ErrorMessages} />
                    <FieldStyled
                      type={INPUT.TYPE.TEXT}
                      name={INPUT.NAME.COUNT_IN_STOCK}
                      id={INPUT.NAME.COUNT_IN_STOCK}
                      placeholder={formatMessage(localization.countInStock)}
                    />
                    <ErrorMessage name={INPUT.NAME.COUNT_IN_STOCK} component={ErrorMessages} />
                    <FieldStyled
                      type={INPUT.TYPE.TEXT}
                      name={INPUT.NAME.IMAGE_URL}
                      id={INPUT.NAME.IMAGE_URL}
                      placeholder={formatMessage(localization.imageUrl)}
                    />
                    <ErrorMessage name={INPUT.NAME.IMAGE_URL} component={ErrorMessages} />
                  </FormStyled>
                  <ModalFooter
                    primaryButtonMessage={localization.save}
                    primaryButtonCallBack={() => onSubmit(isValid, values)}
                    secondaryButtonMessage={localization.cancel}
                    secondaryButtonCallBack={toggleOpen}
                    isPrimaryButtonDisabled={!isValid}
                  />
                </>
              );
            }}
          </Formik>
        </FormContainer>
      </CustomModal>
    </Container>
  );
};

export default HomeScreen;
