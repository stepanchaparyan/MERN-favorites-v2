import * as actionTypes from '../constants/cartConstants';
import axios from 'axios';
import { HEADER_CONFIG, URL } from '../../constants';

const { CARTS } = URL;

export const getMyCartItems = () => async dispatch => {
  try {
    dispatch({ type: actionTypes.GET_CARTS_REQUEST });

    const { data } = await axios.get(`${CARTS}/my`);

    dispatch({
      type: actionTypes.GET_CARTS_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_CARTS_FAIL,
      paiyload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
};

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

//  remove from cart
export const removeFromCart = id => {
  return async dispatch => {
    try {
      dispatch({
        type: actionTypes.REMOVE_FROM_CART_REQUEST,
        loading: true
      });

      const { data } = await axios.delete(`${CARTS}/delete/${id}`, HEADER_CONFIG);

      dispatch({
        type: actionTypes.REMOVE_FROM_CART_SUCCESS,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: actionTypes.REMOVE_FROM_CART_FAIL,
        loading: false,
        error: error.response && error.response.data.message
      });
    }
  };
};
