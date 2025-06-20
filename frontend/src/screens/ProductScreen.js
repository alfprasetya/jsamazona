import { getProducts } from '../api.js';
import { parseRequestUrl } from '../utils.js';

const ProductScreen = {
    render: async () => {
        const { id } = parseRequestUrl();
        const product = await getProducts(id);

        if (product.error) {
            return `<div>${product.error}<\div>`;
        }
        
        return `<div> ${product.name} </div>`;
    }
};

export default ProductScreen;