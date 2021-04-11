import * as actionTypes from '../constants/productConstants';

export const productsReducer = (state = { products: [], loading: false }, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_PRODUCTS_REQUEST:
      return {
        loading: true,
        ...state
      };
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return {
        products: payload,
        loading: false
      };
    case actionTypes.GET_PRODUCTS_FAIL:
      return {
        loading: false,
        error: payload
      };

    case actionTypes.ADD_PRODUCT_REQUEST:
      return {
        loading: true,
        ...state
      };
    case actionTypes.ADD_PRODUCT_SUCCESS:
      return {
        state,
        products: [...state.products, payload],
        loading: false
      };
    case actionTypes.ADD_PRODUCT_FAIL:
      return {
        loading: false,
        error: payload
      };
    default:
      return state;
  }
};

export const productDetailsReducer = (
  state = { product: {}, loading: false },
  { type, payload }
) => {
  switch (type) {
    case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
      return {
        loading: true
      };
    case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: payload
      };
    case actionTypes.GET_PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: payload
      };
    case actionTypes.GET_PRODUCT_DETAILS_RESET:
      return {
        product: {}
      };
    default:
      return state;
  }
};
