import {
  GET_APARTMENT_FAIL,
  GET_APARTMENT_LOADING,
  GET_APARTMENT_SUCCESS,
} from "../../../constants/actionTypes";
import axiosInstance from "../../../utils/axiosInstance";

const getApartments = () => async (dispatch) => {
  dispatch({
    type: GET_APARTMENT_LOADING,
  });
  try {
    const res = await axiosInstance.get("/apartment/viewAll");
    // console.log(res.data.data);
    dispatch({
      type: GET_APARTMENT_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_APARTMENT_FAIL,
    });
  }
};

export default getApartments;
