import { LOGIN_FAIL, LOGIN_LOADING, LOGIN_SUCCESS } from "../../../constants/actionTypes";
import axiosInstance from "../../../utils/axiosInstance";

export default ({email, password}) =>
  (dispatch) =>
  async (onSuccess) => {
    dispatch({
      type: LOGIN_LOADING,
    });
    try {
      const res = await axiosInstance.post("/auth/signin", {
        email,
        password,
      });

      localStorage.setItem("token", res.data?.data?.token);
      localStorage.setItem("user", res.data?.data?.user);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data?.data?.user,
      });
      onSuccess();
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: error.response.data?.message,
      });
    }
  };
