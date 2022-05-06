import {
  MAKE_TRANSFER_LOADING,
  MAKE_TRANSFER_SUCCESS,
  MAKE_TRANSFER_FAIL,
} from "../../../constants/actionTypes";
import axiosInstance from "../../../utils/axiosInstance";

const transfers = (form) => async (dispatch) => {
  dispatch({
    type: MAKE_TRANSFER_LOADING,
  });
  try {
    const res = await axiosInstance.put("/transaction/transfer", form);

    dispatch({
      type: MAKE_TRANSFER_SUCCESS,
      payload: res.data.message,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: MAKE_TRANSFER_FAIL,
      payload: err.response?.data?.message,
    });
  }
};

export default transfers;
