import { userConstants } from "../constants/userConstants";
import userService from "../services/user.service";

export const loginAccount = (userName, password) => async (dispatch) => {
    try {
        dispatch({
            type: userConstants.USER_LOGIN_REQUEST,
        })
        const { data } = await userService.login(userName, password);
        dispatch({
            type: userConstants.USER_LOGIN_SUCCESS,
            payload: data
        })
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: userConstants.USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}