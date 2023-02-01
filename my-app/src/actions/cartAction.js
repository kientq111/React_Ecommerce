import { cartConstants } from '../constants/cartConstants';
var array = require('lodash/array');

export const increaseCartItem = (obj, quantity = 1) => (dispatch) => {
    console.log(obj);
    const listCart = JSON.parse(localStorage.getItem('listCart')) || [];
    const cartIndex = array.findIndex(listCart, { _id: obj._id });
    if (cartIndex >= 0) {
        listCart[cartIndex].amount += quantity;
    } else {
        obj.amount = quantity;
        listCart.push(obj);
    }
    dispatch({
        type: cartConstants.ADD_CART_ITEM,
        payload: listCart
    })
    localStorage.setItem('listCart', JSON.stringify(listCart));
}


export const decreaseCartItem = (obj) => (dispatch) => {
    const listCart = JSON.parse(localStorage.getItem('listCart')) || [];
    const cartIndex = array.findIndex(listCart, { _id: obj._id });
    listCart[cartIndex].amount--;
    if (listCart[cartIndex].amount === 0) {
        listCart.splice(cartIndex, 1);
    }
    dispatch({
        type: cartConstants.SUBTRACT_CART_ITEM,
        payload: listCart
    })
    localStorage.setItem('listCart', JSON.stringify(listCart));
}