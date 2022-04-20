import { REGISTER_FAIL, REGISTER_LOADING, REGISTER_SUCCESS } from "../../../constants/actionTypes"
import axiosInstance from "../../../utils/axiosInstance";


export default ({ firstName, lastName, email, password, phone }) =>  (dispatch) => async (onSuccess) => {
    dispatch({
      type: REGISTER_LOADING,
    });
    try {
        const res = await axiosInstance.post("/auth/signup", {
          firstName,
          lastName,
          email,
          password,
          phone,
        });
        console.log(res.data)

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data?.data?.user,
        })
        onSuccess();
    }catch(error) {
        console.log(error.response.data?.message);
        dispatch({
            type: REGISTER_FAIL,
            payload: error.response.data?.message
        })
    }

  };