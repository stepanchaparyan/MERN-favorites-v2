import * as actionTypes from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_TO_CART:
      const item = payload;

      const existItem = state.cartItems.find(x => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(x => (x.product === existItem.product ? item : x))
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item]
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
