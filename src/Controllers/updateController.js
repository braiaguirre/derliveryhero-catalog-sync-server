const  axios  = require('axios');
const { DELIVERY_HERO_TOKEN_256100, DELIVERY_HERO_TOKEN_271082 } = process.env

const URL = 'https://partners-pedidosya.deliveryhero.io/api/assortment/v1/vendors';

const updateController = async (id, data) => {
    if (Number(id) === 256100) axios.defaults.headers.common = { 'Authorization': `Bearer ${DELIVERY_HERO_TOKEN_256100}` }
    if (Number(id) === 271082) axios.defaults.headers.common = { 'Authorization': `Bearer ${DELIVERY_HERO_TOKEN_271082}` }
    await axios.put(`${URL}/${id}/products-bulk`, { products: [ ...data ] });
    return 'Catalog updated.'
}

module.exports = updateController