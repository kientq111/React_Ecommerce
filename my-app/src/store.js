import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import ProductReducers from "./reducers/productReducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import UserReducers from "./reducers/userReducers";
import ProductCart from "./reducers/cartReducers"

const reducers = combineReducers({
    getProduct: ProductReducers.getProductReducer,
    loginAccount: UserReducers.loginReducer,
    cart: ProductCart.getProductCartReducer
})

const middleware = [thunk]


let initialState = {};

const loginAccount = localStorage.getItem('userInfo')
? JSON.parse(localStorage.getItem('userInfo'))
: null


const cart = localStorage.getItem('listCart')
    ? JSON.parse(localStorage.getItem('listCart'))
    : []

initialState = {
    loginAccount,
    cart: cart
}


const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;