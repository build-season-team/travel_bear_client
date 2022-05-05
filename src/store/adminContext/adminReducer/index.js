import { CLEAR_MESSAGE, GET_APARTMENT_FAIL, GET_APARTMENT_LOADING, GET_APARTMENT_SUCCESS } from "../../../constants/actionTypes";

const adminReducer = (state, {type, payload}) => {
    switch(type) {
        case GET_APARTMENT_LOADING:
            return {
                ...state,
                loading: true
            }
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