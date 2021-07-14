import * as actionTypes from '../constants/productConstants';
import axios from 'axios';
import { HEADER_CONFIG, URL } from '../../constants';

const { PRODUCTS } = URL;

export const getProducts = () => async dispatch => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });

    const { data } = await axios.get(PRODUCTS);
    dispatch({
      type: actionTypes.GET_PRODUCTS_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCTS_FAIL,
      paiyload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
};

export const getProductDetails = id => async dispatch => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`${PRODUCTS}/${id}`);
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
};

export const removeProductDetails = () => dispatch => {
  dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_RESET });
};

// add product
export const addProduct = productData => {
  return async dispatch => {
    try {
      dispatch({
        type: actionTypes.ADD_PRODUCT_REQUEST,
        loading: true
      });

      const { data } = await axios.post(`${PRODUCTS}/add`, productData, HEADER_CONFIG);

      dispatch({
        type: actionTypes.ADD_PRODUCT_SUCCESS,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: actionTypes.ADD_PRODUCT_FAIL,
        error: error.response && error.response.data.message
      });
    }
  };
};

//  delete product
export const deleteProduct = id => {
  return async dispatch => {
    try {
      dispatch({
        type: actionTypes.DELETE_PRODUCT_REQUEST,
        loading: true
      });

      const { data } = await axios.delete(`${PRODUCTS}/delete/${id}`, HEADER_CONFIG);

      dispatch({
        type: actionTypes.DELETE_PRODUCT_SUCCESS,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: actionTypes.DELETE_PRODUCT_FAIL,
        loading: false,
        error: error.response && error.response.data.message
      });
    }
  };
};
