import axios from 'axios';
import {
  CREATE_BOOK_FAIL,
  CREATE_BOOK_REQUEST,
  CREATE_BOOK_SUCCESS,
  FETCH_BOOK_FAIL,
  FETCH_BOOK_REQUEST,
  FETCH_BOOK_SUCCESS,
  DELETE_BOOK_FAIL,
  DELETE_BOOK_SUCCESS,
  DELETE_BOOK_REQUEST,
  BOOK_DETAIL_SUCCESS,
  BOOK_DETAIL_FAIL,
  BOOK_DETAIL_REQUEST,
  BOOK_UPDATE_SUCCESS,
  BOOK_UPDATE_REQUEST,
  BOOK_UPDATE_FAIL,
} from '../constants/bookConstants.js';
import { HEADER_CONFIG, URL } from '../../constants';

const { BOOKS } = URL;

//Create book

export const createBook = bookData => {
  return async dispatch => {
    try {
      dispatch({
        type: CREATE_BOOK_REQUEST,
        loading: true,
      });

      const { data } = await axios.post(BOOKS, bookData, HEADER_CONFIG);

      dispatch({
        type: CREATE_BOOK_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_BOOK_FAIL,
        error: error.response && error.response.data.message,
      });
    }
  };
};

//Fetch all books

export const fetchBooks = () => {
  return async dispatch => {
    try {
      dispatch({
        type: FETCH_BOOK_REQUEST,
        loading: true,
      });

      const { data } = await axios.get(BOOKS, HEADER_CONFIG);
      dispatch({
        type: FETCH_BOOK_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_BOOK_FAIL,
        error: error.response && error.response.data.message,
      });
    }
  };
};

//delete a book

export const deleteBook = id => {
  return async dispatch => {
    try {
      dispatch({
        type: DELETE_BOOK_REQUEST,
        loading: true,
      });

      const { data } = await axios.delete(`${BOOKS}/${id}`, HEADER_CONFIG);
      dispatch({
        type: DELETE_BOOK_SUCCESS,
        payload: data,
      });

      dispatch({
        type: FETCH_BOOK_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: DELETE_BOOK_FAIL,
        loading: false,
        error: error.response && error.response.data.message,
      });
    }
  };
};

//Fetch a signle book
export const fetchBook = (id, bookData) => {
  return async dispatch => {
    try {
      dispatch({
        type: BOOK_DETAIL_REQUEST,
        loading: true,
      });

      const { data } = await axios.get(`${BOOKS}/${id}`, bookData, HEADER_CONFIG);

      dispatch({
        type: BOOK_DETAIL_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: BOOK_DETAIL_FAIL,
        error: error.response && error.response.data.message,
      });
    }
  };
};

//UPDATE BOOK

export const updateBook = (id, bookData) => {
  return async dispatch => {
    try {
      dispatch({
        type: BOOK_UPDATE_REQUEST,
        loading: true,
      });

      const { data } = await axios.put(`${BOOKS}/${id}`, bookData, HEADER_CONFIG);
      dispatch({
        type: BOOK_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: BOOK_UPDATE_FAIL,
        loading: false,
        error: error.response && error.response.data.message,
      });
    }
  };
};
