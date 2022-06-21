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
  FILE_ERROR,
  SET_UPLOAD_PERSENTAGE,
  SET_MESSAGE,
  REMOVE_FILE,
} from '../types';

export default (state, { type, payload }) => {
  switch (type) {
    case GET_PROFILE_REQUEST:
    case ADD_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: payload,
        loading: false,
        error: null,
      };
    case ADD_PROFILE_SUCCESS:
      return {
        ...state,
        profile: [payload],
        loading: false,
      };
    case EDIT_PROFILE:
      return {
        ...state,
        editProfile: payload,
        loading: false,
      };
    case TOGGLE_FORM:
      return {
        ...state,
        toggleForm: payload,
        error: null,
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: state.profile.map(profile => (profile._id === payload._id ? payload : profile)),
        loading: false,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
      };

    case UPDATE_FILE:
      return {
        ...state,
        uploadedFile: payload,
      };
    case FILE_ERROR:
      return {
        ...state,
        error: payload,
      };
    case REMOVE_FILE:
      return {
        ...state,
        uploadedFile: null,
      };

    case SET_UPLOAD_PERSENTAGE:
      return {
        ...state,
        uploadPercentage: payload,
      };

    case SET_MESSAGE:
      return {
        ...state,
        message: payload,
      };
    default:
      return state;
  }
};
