import {
  GET_ME
} from "../../../constants/actionTypes";
import axiosInstance from "../../../utils/axiosInstance";

export default () =>
  async (dispatch) => {
    console.log('in get me')
    try {
      const res = await axiosInstance.get("/auth/getme");
        console.log(res.data.data)
      localStorage.setItem("user", JSON.stringify(res.data?.data));
      dispatch({
        type: GET_ME,
        payload: res.data?.data,
      });
    } catch (error) {
      
    }
  };
