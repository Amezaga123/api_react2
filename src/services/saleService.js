import axios from 'axios';

const apiUrl = 'http://localhost:3000/api/sales';

const saleService = {
    createSale: async (sale) => {
        const response = await axios.post(apiUrl, sale);
        return response.data;
    },
    getSales: async () => {
        const response = await axios.get(apiUrl);
        return response.data;
    },
};

export default saleService;
