import axios from "axios";

const HomeScreen = {
    render: async () => {
        const response = await axios({
            url: 'http://localhost:5000/api/products',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // Fix the condition to properly check the response status
        if (!response || response.status !== 200) {
            return `<div>Error in fetching data</div>`;
        }

        const products = response.data;

        
        return `
        <ul class="products">
            ${products.map(product => `
                <li>
                    <div class="product">
                        <a href="/#/product/1">
                            <img src="${product.image}" alt="${product.name}">
                        </a>
                        <div class="product-name">
                            <a href="/#/product/1">
                                ${product.name}
                            </a>
                        </div>
                        <div class="product-brand">
                            ${product.brand}
                        </div>
                        <div class="product-price">
                            ${product.price}
                        </div>
                    </div>       
                </li>`
            ).join('\n')}
        `
    }
};

export default HomeScreen;