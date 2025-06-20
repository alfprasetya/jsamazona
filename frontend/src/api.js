import axios from "axios";
import { apiUrl } from "./config";

export const getProducts = async (id) => {
    try {
        const response = await axios({
            url: `${apiUrl}/api/products/${id}`,
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            }
        });

        if (response.statusText !== 'OK') {
            throw new Error(response.data.message);
        }

        return response.data;
    } catch (e) {
        return { error: e.response.data.message || e.message };
    }
};