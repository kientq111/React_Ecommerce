import { cartConstants } from '../constants/cartConstants';

class ProductCartReducers {
    getProductCartReducer = (state = {}, action) => {
        switch (action.type) {
            case cartConstants.ADD_CART_ITEM:
                return  action.payload 
            case cartConstants.SUBTRACT_CART_ITEM:
                return action.payload 
            default:
                return state
        }
    }
}

export default new ProductCartReducers();