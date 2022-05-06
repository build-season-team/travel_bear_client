import { ADD_BANK_FAIL, ADD_BANK_LOADING, ADD_BANK_SUCCESS, CLEAR_MESSAGE, GET_BANK_FAIL, GET_BANK_LOADING, GET_BANK_SUCCESS, GET_TRANSACTION_LOADING, GET_TRANSACTION_SUCCESS, WITHDRAWAL_FAIL, WITHDRAWAL_LOADING, WITHDRAWAL_SUCCESS } from "../../../constants/actionTypes";

export default (state, {type, payload}) => {

    switch (type) {
      case ADD_BANK_LOADING:
        return {
          ...state,
          loading: true,
        };
      case ADD_BANK_SUCCESS:
        return {
          ...state,
          loading: false,
          message: "Bank added successfully",
          banks: [...state.banks, payload.bank],
        };
      case ADD_BANK_FAIL:
        return {
          ...state,
          loading: false,
          message: null,
          error: payload,
        };
      case GET_BANK_LOADING:
        return {
          ...state,
          loading: true,
        };
      case GET_BANK_SUCCESS:
        return {
          ...state,
          loading: false,
          banks: payload,
        };
      case GET_BANK_FAIL:
        return {
          ...state,
          loading: false,
          error: payload,
        };
      case WITHDRAWAL_LOADING:
        return {
          ...state,
          loading: true,
        };
      case WITHDRAWAL_SUCCESS:
        return {
          ...state,
          loading: false,
          message: payload.message,
          transactions: [...state.transactions, payload.data]
        };
      case WITHDRAWAL_FAIL:
        return {
          ...state,
          loading: false,
          error: payload,
        };

        case GET_TRANSACTION_LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_TRANSACTION_SUCCESS:
            return {
                ...state,
                transactions: payload,
                loading: false
            }

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