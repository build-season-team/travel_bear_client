import {CLEAR_MESSAGE, UPLOAD_SHORTLET_FAIL, UPLOAD_SHORTLET_LOADING, UPLOAD_SHORTLET_SUCCESS} from '../../../constants/actionTypes';

const shortletReducer = (state, {type, payload}) => {
    switch (type) {
      case UPLOAD_SHORTLET_LOADING:
        console.log("upload loading");
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
      default:
        return state;
    }
}

export default shortletReducer;