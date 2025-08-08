import { parseRequestUrl } from "../utils";

const CartScreen = {
    after_render: () => {
        
    },
    render: () => {
        const request = parseRequestUrl();
        return `<div>Cart Screen id: ${request.id}</>`;
    }
}

export default CartScreen;