import { CLEAR_MESSAGE, GET_APARTMENT_FAIL, GET_APARTMENT_LOADING, GET_APARTMENT_SUCCESS, VERIFY_APARTMENT_FAIL, VERIFY_APARTMENT_LOADING, VERIFY_APARTMENT_SUCCESS } from "../../../constants/actionTypes";

const adminReducer = (state, {type, payload}) => {
    switch (type) {
      case GET_APARTMENT_LOADING:
        return {
          ...state,
          loading: true,
        };
      case GET_APARTMENT_SUCCESS:
        return {
          ...state,
          loading: false,
          apartments: payload,
        };
      case GET_APARTMENT_FAIL:
        return {
          ...state,
          loading: false,
          error: "something went wrong",
        };
      case VERIFY_APARTMENT_LOADING:
        return {
          ...state,
          loading: true,
        };
      case VERIFY_APARTMENT_SUCCESS:
        return {
          ...state,
          loading: false,
          message: payload,
        };
      case VERIFY_APARTMENT_FAIL:
        return {
          ...state,
          loading: false,
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

export default adminReducer