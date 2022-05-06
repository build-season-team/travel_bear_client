import {
  GET_BANK_FAIL,
  GET_BANK_LOADING,
  GET_BANK_SUCCESS,
} from "../../../constants/actionTypes";
import axiosInstance from "../../../utils/axiosInstance";

const getBanks = () => async (dispatch) => {
  dispatch({
    type: GET_BANK_LOADING,
  });
  try {
    const res = await axiosInstance.get("/bank/getbanks");
    console.log(res.data.data,)
    dispatch({
      type: GET_BANK_SUCCESS,
      payload: res.data.data.data,
    });
  } catch (err) {
    dispatch({
      type: GET_BANK_FAIL,
      payload: err.response.data?.message,
    });
  }
};

export default getBanks;
