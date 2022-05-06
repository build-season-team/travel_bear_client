import {
  VERIFY_APARTMENT_FAIL,
  VERIFY_APARTMENT_LOADING,
  VERIFY_APARTMENT_SUCCESS,
} from "../../../constants/actionTypes";
import axiosInstance from "../../../utils/axiosInstance";

const verifyApartment = (apartmentID) =>  (dispatch) => async (onSuccess) => {
  dispatch({
    type: VERIFY_APARTMENT_LOADING,
  });
  try {
    const res = await axiosInstance.put(`/admin/apartments/verify/${apartmentID}`);
    // console.log(res.data.data);
    dispatch({
      type: VERIFY_APARTMENT_SUCCESS,
      payload: res.data.message,
    });
    onSuccess();
  } catch (error) {
    dispatch({
      type: VERIFY_APARTMENT_FAIL,
      payload: error.response.data?.message
    });
  }
};

export default verifyApartment;
