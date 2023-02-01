import {userConstants} from "../constants/userConstants";

class UserReducer {
    loginReducer = (state = {}, action) => {
        switch (action.type) {
            case userConstants.USER_LOGIN_REQUEST:
                return {loading: true}
            case userConstants.USER_LOGIN_SUCCESS:
                return {loading: false, data: action.payload}
            case userConstants.USER_LOGIN_FAIL:
                return {loading: false, error: action.payload}
            default:
                return state
        }
    }
}

export default new UserReducer();