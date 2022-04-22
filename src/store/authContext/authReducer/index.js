import { CLEAR_MESSAGE, LOGIN_FAIL, LOGIN_LOADING, LOGIN_SUCCESS, REGISTER_FAIL, REGISTER_LOADING, REGISTER_SUCCESS } from "../../../constants/actionTypes";

const authReducer =  (state, { type, payload }) => {
    switch (type) {
        case REGISTER_LOADING:
            return {
            ...state,
            loading: true,
            };

        case REGISTER_SUCCESS:
            return {
            ...state,
            loading: false,
            message: "Registration was successful",
            user: payload,
            };

        case REGISTER_FAIL:
            return {
            ...state,
            loading: false,
            error: payload,
            };
        case LOGIN_LOADING:
            return {
            ...state,
            loading: true,
            };

        case LOGIN_SUCCESS:
            return {
            ...state,
            loading: false,
            isLoggedIn: true,
            message: "login was successful",
            user: payload,
            };

        case LOGIN_FAIL:
            return {
            ...state,
            loading: false,
            error: payload,
            };
        case CLEAR_MESSAGE:
            return {
            ...state,
            message: null,
            error: null,
            };

        default:
            return state;
    }
};

export default authReducer;