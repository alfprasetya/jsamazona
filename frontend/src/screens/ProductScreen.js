import { parseRequestUrl } from '../utils.js';

const ProductScreen = {
    render: () => {
        const { id } = parseRequestUrl();
        return `<div> Product Screen ${id} </div>`;
    }
};

export default ProductScreen;