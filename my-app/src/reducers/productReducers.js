import { productConstants } from "../constants/productConstants";

class ProductReducers {
    getProductReducer = (state = {}, action) => {
        switch (action.type) {
            case productConstants.GET_PRODUCT_REQUEST:
                return { loading: true }
            case productConstants.GET_PRODUCT_SUCCESS:
                return { loading: false, products: action.payload }
            case productConstants.GET_PRODUCT_FAIL:
                return { loading: false, error: action.payload }
            default:
                return state
        }
    }
}

export default new ProductReducers();