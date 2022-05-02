import { LOGOUT } from "../../../constants/actionTypes";

export default () =>(dispatch) => (onSuccess) => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
      dispatch({
        type: LOGOUT,
      });
      onSuccess();
    
  };