import { productConstants } from "../constants/productConstants";
import productService from "../services/product.service";

export const getProduct = (pageNumber) => async (dispatch) => {
    try {
        dispatch({
            type: productConstants.GET_PRODUCT_REQUEST,
        })
        const { data } = await productService.getAll(pageNumber);
        dispatch({
            type: productConstants.GET_PRODUCT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: productConstants.GET_PRODUCT_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const getProductById = async (id) => {
    try {
        const { data } = await productService.getById(id);
        return data
    } catch (error) {
        throw new Error('Opps, there is something wrong!')
    }
}