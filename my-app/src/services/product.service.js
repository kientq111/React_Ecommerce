import http from '../common/https-common';

class ProductDataService {
    getAll(pageNumber) {
        return http.get(`/products?pageNumber=${pageNumber}`)
    }
    getById(id) {
        return http.get(`/products/${id}`)
    }
}

export default new ProductDataService();