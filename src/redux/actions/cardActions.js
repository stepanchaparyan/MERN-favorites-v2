import * as actionTypes from '../constants/cardConstants';
import axios from 'axios';
import { URL } from '../../constants/url';

const { PRODUCTS } = URL;

export const addToCard = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`${PRODUCTS}/${id}`);

  dispatch({
    type: actionTypes.ADD_TO_CARD,
    payload: {
      product: data._id,
      name: data.name,
      imageUrl: data.imageUrl,
      price: data.price,
      countInStock: data.countInStock,
      qty
    }
  });

  localStorage.setItem('card', JSON.stringify(getState().card.cardItems));
};

export const removeFromCard = id => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CARD,
    payload: id
  });

  localStorage.setItem('card', JSON.stringify(getState().card.cardItems));
};
