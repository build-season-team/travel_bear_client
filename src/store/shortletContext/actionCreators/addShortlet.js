import { UPLOAD_SHORTLET_FAIL, UPLOAD_SHORTLET_LOADING, UPLOAD_SHORTLET_SUCCESS } from "../../../constants/actionTypes"
import axiosInstance from "../../../utils/axiosInstance";

export default (formData) => async (dispatch) => {
    dispatch({
        type: UPLOAD_SHORTLET_LOADING
    });
    try {
        const res = await axiosInstance.post('/apartment/register', formData);
        console.log(res.data);
        dispatch({
            type: UPLOAD_SHORTLET_SUCCESS,
            payload: res.data.message
        })
    }catch(error) {
        console.log(error.response);
        dispatch({
          type: UPLOAD_SHORTLET_FAIL,
          payload: error.response.data?.message,
        });
    }
}