import {
  ADD_BANK_FAIL,
  ADD_BANK_LOADING,
  ADD_BANK_SUCCESS,
} from "../../../constants/actionTypes";
import axiosInstance from "../../../utils/axiosInstance";

const addBank = (form) =>  (dispatch) => async (onsuccess) => {
  dispatch({
    type: ADD_BANK_LOADING,
  });
  try {
      const res = await axiosInstance.post('/bank/addbank', form)
      dispatch({
        type: ADD_BANK_SUCCESS,
        payload: res.data.data,
      });
      onsuccess()
  } catch (err) {
    dispatch({
      type: ADD_BANK_FAIL,
      payload: err.response.data?.message,
    });
  }
};

export default addBank;
