import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { HEADER_CONFIG, URL } from '../../constants';
import FavItemContext from './favItemContext';
import favItemReducer from './favItemReducer';
import {
  REMOVE_FAVITEM,
  ADD_FAVITEM,
  EDIT_FAVITEM,
  CLEAR_EDIT,
  UPDATE_FAVITEM,
  GET_FAVITEMS,
  FAVITEM_ERROR,
  TOGGLE_FORM,
  CLEAR_ERRORS,
  FILTER_FAVITEM,
  CLEAR_FILTER,
  SEARCH_FAVITEM,
  CLEAR_SEARCH,
  SEARCH_FILTER_FAVITEM,
  CLEAR_SEARCH_FILTER
} from '../types';

const { FAVITEM, FAVITEM_ADD, FAVITEM_UPDATE } = URL;

const FavItemState = props => {
  const intialState = {
    editFavItem: null,
    loading: true,
    favItems: [],
    error: null,
    toggleForm: false,
    filterFavItems: null,
    searchFavItem: null,
    searchFilterFavItems: null
  };
  const [state, dispatch] = useReducer(favItemReducer, intialState);

  // get favItems
  const getFavItems = async () => {
    try {
      const res = await axios.get(FAVITEM);
      dispatch({
        type: GET_FAVITEMS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: FAVITEM_ERROR,
        payload: err.response.data.errors
      });
    }
  };

  // Add FavItem
  const addFavItem = async favItem => {
    try {
      const res = await axios.post(
        FAVITEM_ADD,
        favItem,
        HEADER_CONFIG.CONTENT_TYPE_APPLICATION_JSON
      );
      dispatch({
        type: ADD_FAVITEM,
        payload: res.data
      });
      dispatch({
        type: TOGGLE_FORM,
        payload: !state.toggleForm
      });
      dispatch({
        type: CLEAR_ERRORS
      });
    } catch (err) {
      dispatch({
        type: FAVITEM_ERROR,
        payload: err.response.data.errors
      });
    }
  };

  // remove favItem
  const removeFavItem = async id => {
    try {
      await axios.delete(`${FAVITEM}/${id}`);
      dispatch({
        type: REMOVE_FAVITEM,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: FAVITEM_ERROR,
        payload: err.response.data.errors
      });
    }
  };

  // update favItem
  const update_FavItem = async favItem => {
    try {
      const res = await axios.put(
        `${FAVITEM_UPDATE}/${favItem._id}`,
        favItem,
        HEADER_CONFIG.CONTENT_TYPE_APPLICATION_JSON
      );
      dispatch({
        type: UPDATE_FAVITEM,
        payload: res.data
      });
      dispatch({
        type: TOGGLE_FORM,
        payload: !state.toggleForm
      });
      dispatch({
        type: CLEAR_ERRORS
      });
      getFavItems();
    } catch (err) {
      dispatch({
        type: FAVITEM_ERROR,
        payload: err.response.data.errors
      });
    }
  };

  // Edit favItem
  const edit_FavItem = favItem => {
    dispatch({
      type: EDIT_FAVITEM,
      payload: favItem
    });
  };
  const clearEdit = () => {
    dispatch({
      type: CLEAR_EDIT
    });
  };
  const clearErrors = () => {
    dispatch({
      type: CLEAR_ERRORS
    });
  };
  // toggleForm
  const toggle_Form = () => {
    dispatch({
      type: TOGGLE_FORM,
      payload: !state.toggleForm
    });
  };
  // Filter favItem
  const filter_FavItem = selectedCategory => {
    dispatch({
      type: FILTER_FAVITEM,
      payload: selectedCategory
    });
  };
  const clearFilter = () => {
    dispatch({
      type: CLEAR_FILTER
    });
  };
  // Search favItem
  const search_FavItem = favItem => {
    dispatch({
      type: SEARCH_FAVITEM,
      payload: favItem
    });
  };
  const clearSearch = () => {
    dispatch({
      type: CLEAR_SEARCH
    });
  };
  const search_filter_FavItems = data => {
    dispatch({
      type: SEARCH_FILTER_FAVITEM,
      payload: data
    });
  };
  const clearSearchFilter = () => {
    dispatch({
      type: CLEAR_SEARCH_FILTER
    });
  };

  return (
    <FavItemContext.Provider
      value={{
        favItems: state.favItems,
        editFavItem: state.editFavItem,
        error: state.error,
        loading: state.loading,
        toggleForm: state.toggleForm,
        filterFavItems: state.filterFavItems,
        searchFavItem: state.searchFavItem,
        searchFilterFavItems: state.searchFilterFavItems,
        addFavItem,
        removeFavItem,
        edit_FavItem,
        clearEdit,
        toggle_Form,
        update_FavItem,
        clearErrors,
        getFavItems,
        filter_FavItem,
        clearFilter,
        search_FavItem,
        clearSearch,
        search_filter_FavItems,
        clearSearchFilter
      }}
    >
      {props.children}
    </FavItemContext.Provider>
  );
};

FavItemState.propTypes = {
  children: PropTypes.object
};

export default FavItemState;
