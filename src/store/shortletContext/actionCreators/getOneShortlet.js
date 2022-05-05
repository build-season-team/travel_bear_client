import {FETCH_ONE_SHORTLET_LOADING, FETCH_ONE_SHORTLET_SUCCESS, FETCH_ONE_SHORTLET_FAIL} from '../../../constants/actionTypes'
import axiosInstance from "../../../utils/axiosInstance";

const getOneShortlet = (id) => async (dispatch) => {
  dispatch({
    type: FETCH_ONE_SHORTLET_LOADING,
  });
  try {
    const res = await axiosInstance.get(`/apartment/view/${id}`);
    dispatch({
      type: FETCH_ONE_SHORTLET_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_ONE_SHORTLET_FAIL,
      payload: error.response.data?.message,
    });
  }
};

export default getOneShortlet;