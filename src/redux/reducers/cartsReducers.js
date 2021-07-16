import * as actionTypes from '../constants/cartConstants';

export const cartsReducer = (state = { cartItems: [], loading: false }, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_CARTS_REQUEST:
    case actionTypes.ADD_TO_CART_REQUEST:
    case actionTypes.REMOVE_FROM_CART_REQUEST:
      return {
        loading: true,
        ...state
      };
    case actionTypes.GET_CARTS_FAIL:
    case actionTypes.ADD_TO_CART_FAIL:
    case actionTypes.REMOVE_FROM_CART_FAIL:
      return {
        loading: false,
        error: payload
      };

    case actionTypes.GET_CARTS_SUCCESS:
      return {
        cartItems: payload,
        loading: false
      };
    case actionTypes.ADD_TO_CART_SUCCESS:
      return {
        ...state,
        cartItems: [...state.cartItems, payload],
        loading: false
      };
    case actionTypes.REMOVE_FROM_CART_SUCCESS:
      return {
        cartItems: state.cartItems.filter(item => item._id !== payload._id),
        loading: false
      };
    default:
      return state;
  }
};
