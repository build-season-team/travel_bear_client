import {
  GET_TRANSACTION_FAIL,
  GET_TRANSACTION_LOADING,
  GET_TRANSACTION_SUCCESS,
} from "../../../constants/actionTypes";
import axiosInstance from "../../../utils/axiosInstance";

const getTransactions = () => async (dispatch) => {
  dispatch({
    type: GET_TRANSACTION_LOADING,
  });
  try {
    const res = await axiosInstance.get("/transaction/gettransactions");
    
    dispatch({
      type: GET_TRANSACTION_SUCCESS,
      payload: res.data.data,
    });
  } catch (err) {
      console.log(err.response);
    dispatch({
      type: GET_TRANSACTION_FAIL,
      payload: err.response?.data?.message,
    });
  }
};

export default getTransactions;
