import axios from 'axios';

const PRODUCT_API_BASE_URL = "http://8d99-35-185-16-76.ngrok.io";

class ProductService {

    get_predictions(modelInputs) {
        return axios.get(PRODUCT_API_BASE_URL + '/modelpredictions/' + modelInputs);
    }

    efficiencyProducts(product_id) {
        return axios.get(PRODUCT_API_BASE_URL + '/efficiencyproduct/' + product_id);
    }

    similarFeatures(outputFeatures) {
        return axios.get(PRODUCT_API_BASE_URL + '/similarfeatures/' + outputFeatures);
    }

    similarRating(rating) {
        return axios.get(PRODUCT_API_BASE_URL + '/similarrating/' + rating);
    }

}

export default new ProductService()