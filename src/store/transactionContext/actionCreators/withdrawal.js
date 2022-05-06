import {
  WITHDRAWAL_FAIL,
  WITHDRAWAL_LOADING,
  WITHDRAWAL_SUCCESS,
} from "../../../constants/actionTypes";
import axiosInstance from "../../../utils/axiosInstance";

const withdrawal = (form) => async (dispatch) => {
    console.log(form)
  dispatch({
    type: WITHDRAWAL_LOADING,
  });
  try {
    const res = await axiosInstance.post("/transaction/withdraw", form);
    console.log(res.data);
    dispatch({
      type: WITHDRAWAL_SUCCESS,
      payload: res.data
    });
  } catch(err) {
      console.log(err.response)
    dispatch({
      type: WITHDRAWAL_FAIL,
      payload: err.response.data?.message,
    });
  }
};

export default withdrawal;
