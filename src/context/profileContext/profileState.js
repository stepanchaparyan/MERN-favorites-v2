import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { HEADER_CONFIG, URL, ERRORS, COMMON } from '../../constants';
import ProfileContext from './profileContext';
import ProfileReducer from './profileReducer';
import {
  ADD_PROFILE_REQUEST,
  ADD_PROFILE_SUCCESS,
  EDIT_PROFILE,
  UPDATE_PROFILE,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  PROFILE_ERROR,
  TOGGLE_FORM,
  UPDATE_FILE,
  REMOVE_FILE,
  FILE_ERROR,
  SET_UPLOAD_PERSENTAGE,
  SET_MESSAGE
} from '../types';

const { PROFILE, PROFILE_ADD, PROFILE_UPDATE, UPLOAD } = URL;
const { TEXT } = COMMON;

const ProfileState = props => {
  const intialState = {
    editProfile: null,
    loading: true,
    profile: [],
    error: null,
    toggleForm: false,
    uploadedFile: null,
    uploadPercentage: 0,
    message: null
  };
  const [state, dispatch] = useReducer(ProfileReducer, intialState);

  // get profile
  const getProfile = async () => {
    try {
      dispatch({
        type: GET_PROFILE_REQUEST,
        loading: true
      });

      const res = await axios.get(PROFILE);
      dispatch({
        type: GET_PROFILE_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: err.response.data.errors
      });
    }
  };

  // Add Profile
  const addProfile = async profile => {
    try {
      dispatch({
        type: ADD_PROFILE_REQUEST,
        loading: true
      });

      const res = await axios.post(
        PROFILE_ADD,
        profile,
        HEADER_CONFIG.CONTENT_TYPE_APPLICATION_JSON
      );
      dispatch({
        type: ADD_PROFILE_SUCCESS,
        payload: res.data
      });
      getProfile();
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: err.response.data.errors
      });
    }
  };

  // Update profile
  const updateProfile = async profile => {
    try {
      const res = await axios.put(
        PROFILE_UPDATE,
        profile,
        HEADER_CONFIG.CONTENT_TYPE_APPLICATION_JSON
      );
      dispatch({
        type: UPDATE_PROFILE,
        payload: res.data
      });
      getProfile();
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: err.response.data.errors
      });
    }
  };

  const edit_Profile = profile => {
    dispatch({
      type: EDIT_PROFILE,
      payload: profile
    });
  };

  const toggle_Form = () => {
    dispatch({
      type: TOGGLE_FORM,
      payload: !state.toggleForm
    });
  };

  const set_uploadPercentage = progress => {
    dispatch({
      type: SET_UPLOAD_PERSENTAGE,
      payload: progress
    });
  };

  const set_message = message => {
    dispatch({
      type: SET_MESSAGE,
      payload: message
    });
  };

  const update_File = async formData => {
    const config = {
      headers: HEADER_CONFIG.CONTENT_TYPE_MULTIPART_FORM_DATA,
      onUploadProgress: progressEvent => {
        const progress = parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total));
        set_uploadPercentage(progress);
        if (progress === 100) {
          setTimeout(() => set_uploadPercentage(0), 3000);
        }
      }
    };
    try {
      const res = await axios.post(UPLOAD, formData, config);
      dispatch({
        type: UPDATE_FILE,
        payload: res.data
      });
      set_message(TEXT.FILE_UPLOADED);
      setTimeout(() => set_message(null), 10000);
    } catch (err) {
      dispatch({
        type: FILE_ERROR,
        payload: err.response.data.errors
      });
      if (err.response.status === 500) {
        set_message(ERRORS.TEXT_500);
      } else {
        set_message(err.response.data.msg);
      }
    }
  };

  const remove_file = () => {
    dispatch({
      type: REMOVE_FILE
    });
  };

  return (
    <ProfileContext.Provider
      value={{
        profile: state.profile,
        error: state.error,
        loading: state.loading,
        editProfile: state.editProfile,
        toggleForm: state.toggleForm,
        uploadedFile: state.uploadedFile,
        uploadPercentage: state.uploadPercentage,
        message: state.message,
        addProfile,
        toggle_Form,
        edit_Profile,
        updateProfile,
        getProfile,
        update_File,
        remove_file,
        set_uploadPercentage,
        set_message
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  );
};

ProfileState.propTypes = {
  children: PropTypes.object
};

export default ProfileState;
