import * as actionTypes from '../constants/cartConstants';

export const cartsReducer = (state = { cartItems: [], loading: false }, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_TO_CART_REQUEST:
      return {
        loading: true,
        ...state
      };
    case actionTypes.ADD_TO_CART_SUCCESS:
      const item = payload;

      const existItem = state.cartItems.find(x => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(x => (x.product === existItem.product ? item : x)),
          loading: false
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
          loading: false
        };
      }
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(x => x.product !== payload)
      };
    default:
      return state;
  }
};
