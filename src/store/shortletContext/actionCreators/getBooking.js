import {
  GET_BOOKING_FAIL,
  GET_BOOKING_LOADING,
  GET_BOOKING_SUCCESS,
} from "../../../constants/actionTypes";
import axiosInstance from "../../../utils/axiosInstance";

const getBookings = () => async (dispatch) => {
  dispatch({
    type: GET_BOOKING_LOADING,
  });
  try {
    const res = await axiosInstance.get("/booking/bookings");
    console.log(res.data.data)
    dispatch({
      type: GET_BOOKING_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_BOOKING_FAIL,
    });
  }
};

export default getBookings;
