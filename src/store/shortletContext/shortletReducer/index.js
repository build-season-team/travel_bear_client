import {CLEAR_MESSAGE, FETCH_ONE_SHORTLET_FAIL, FETCH_ONE_SHORTLET_LOADING, FETCH_ONE_SHORTLET_SUCCESS, FETCH_SHORTLET_FAIL, FETCH_SHORTLET_LOADING, FETCH_SHORTLET_SUCCESS, UPLOAD_SHORTLET_FAIL, UPLOAD_SHORTLET_LOADING, UPLOAD_SHORTLET_SUCCESS} from '../../../constants/actionTypes';

const shortletReducer = (state, {type, payload}) => {
    switch (type) {
      case UPLOAD_SHORTLET_LOADING:
        return { ...state, loading: true };
      case UPLOAD_SHORTLET_SUCCESS:
        return {
          ...state,
          loading: false,
          message: payload,
          error: null,
        };
      case UPLOAD_SHORTLET_FAIL:
        console.log("upload failed");
        return {
          ...state,
          loading: false,
          message: null,
          error: payload,
        };
      case CLEAR_MESSAGE:
        return {
          ...state,
          message: null,
          error: null,
        };
      case FETCH_SHORTLET_LOADING:
        return {
          ...state,
          loading: true,
        };
      case FETCH_SHORTLET_SUCCESS:
        return {
          ...state,
          loading: false,
          data: [...payload],
        };
      case FETCH_SHORTLET_FAIL:
        return {
          ...state,
          loading: false,
          error: "something went wrong",
        };
      case FETCH_ONE_SHORTLET_LOADING:
        return {
          ...state,
          loading: true,
        };
      case FETCH_ONE_SHORTLET_SUCCESS:
        return {
          ...state,
          loading: false,
          shortlet: payload,
          error: null
        };
      case FETCH_ONE_SHORTLET_FAIL:
        return {
          ...state,
          loading: false,
          error: "Apartment does not exist",
        };
      default:
        return state;
    }
}

export default shortletReducer;