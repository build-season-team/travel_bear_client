import { FETCH_SHORTLET_FAIL, FETCH_SHORTLET_LOADING, FETCH_SHORTLET_SUCCESS } from "../../../constants/actionTypes";
import axiosInstance from "../../../utils/axiosInstance";

const getShortlet = () => async (dispatch) => {
    dispatch({
        type: FETCH_SHORTLET_LOADING
    })
    try {
        const res = await axiosInstance.get('/apartment/viewAll');
        // console.log(res)
        dispatch({
            type: FETCH_SHORTLET_SUCCESS,
            payload: res.data.data
        })

    }catch (error) {
        dispatch({
            type: FETCH_SHORTLET_FAIL
        })
    }
}

export default getShortlet