const  axios  = require('axios');
const { DELIVERY_HERO_API_URL, DELIVERY_HERO_TOKEN } = process.env

const updateController = async () => {
    axios.defaults.headers.common = {
        'Authorization': `Bearer ${DELIVERY_HERO_TOKEN}`
    }

    const { data } = await axios.put(DELIVERY_HERO_API_URL, {
        "products": [
            {
            "sku": "7791293040516",
            "active": false,
            "price": 920,
            "maximum_sales_quantity": 8
            }
        ]
    })
    
    return data;
}

module.exports = updateController