import * as actionTypes from '../constants/cartConstants';
import axios from 'axios';
import { HEADER_CONFIG, URL } from '../../constants';

const { CARTS } = URL;

// export const addToCart = (id, qty) => async (dispatch, getState) => {
//   const { data } = await axios.get(`${PRODUCTS}/${id}`);

//   dispatch({
//     type: actionTypes.ADD_TO_CART,
//     payload: {
//       product: data._id,
//       name: data.name,
//       imageUrl: data.imageUrl,
//       price: data.price,
//       countInStock: data.countInStock,
//       qty
//     }
//   });

//   localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
// };

// add cart
export const addToCart = cartData => {
  return async dispatch => {
    try {
      dispatch({
        type: actionTypes.ADD_TO_CART_REQUEST,
        loading: true
      });

      const { data } = await axios.post(`${CARTS}/add`, cartData, HEADER_CONFIG);

      dispatch({
        type: actionTypes.ADD_TO_CART_SUCCESS,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: actionTypes.ADD_TO_CART_FAIL,
        error: error.response && error.response.data.message
      });
    }
  };
};

export const removeFromCart = id => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id
  });

  localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};
