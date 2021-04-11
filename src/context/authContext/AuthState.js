import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { HEADER_CONFIG, URL } from '../../constants';
import authReducer from './authReducer';
import AuthContext from './authContext';
import setAuthToken from '../../utils/setAuthToken';
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT,
  CLEAR_ERRORS
} from '../types';

const { AUTH, REGISTER } = URL;

const AuthState = props => {
  const intialState = {
    token: localStorage.getItem('token'),
    isAuthencated: null,
    loading: true,
    user: null,
    error: null
  };
  const [state, dispatch] = useReducer(authReducer, intialState);

  // Load User
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const res = await axios.get(AUTH);
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: AUTH_ERROR
      });
    }
  };

  //Register User
  const register = async formData => {
    try {
      dispatch({
        type: REGISTER_REQUEST,
        loading: true
      });

      const res = await axios.post(REGISTER, formData, HEADER_CONFIG.CONTENT_TYPE_APPLICATION_JSON);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
      loadUser();
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg
      });
    }
  };

  //login user
  const login = async formData => {
    try {
      dispatch({
        type: LOGIN_REQUEST,
        loading: true
      });

      const res = await axios.post(AUTH, formData, HEADER_CONFIG.CONTENT_TYPE_APPLICATION_JSON);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
      loadUser();
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg
      });
    }
  };
  const setError = err => {
    dispatch({
      type: REGISTER_FAIL,
      payload: [{ msg: err }]
    });
  };

  // Logout
  const logout = () => dispatch({ type: LOGOUT });

  // Clear Errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });
  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthencated: state.isAuthencated,
        user: state.user,
        error: state.error,
        loading: state.loading,
        register,
        login,
        loadUser,
        logout,
        clearErrors,
        setError
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

AuthState.propTypes = {
  children: PropTypes.object
};

export default AuthState;
