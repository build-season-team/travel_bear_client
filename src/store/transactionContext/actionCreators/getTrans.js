import {
  GET_TRANS_FAIL,
  GET_TRANS_LOADING,
  GET_TRANS_SUCCESS,
} from "../../../constants/actionTypes";
import axiosInstance from "../../../utils/axiosInstance";

const getTrans = () => async (dispatch) => {
    console.log('in trans')
  dispatch({
    type: GET_TRANS_LOADING,
  });
  try {
    const res = await axiosInstance.get("/transaction/gettransact");
    console.log(res.sata.data);
    dispatch({
      type: GET_TRANS_SUCCESS,
      payload: res.data.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: GET_TRANS_FAIL,
      payload: err.response?.data?.message,
    });
  }
};

export default getTrans;
