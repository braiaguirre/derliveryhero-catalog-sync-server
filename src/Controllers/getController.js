const  axios  = require('axios');
const { DUX_TOKEN } = process.env;

const URL = 'https://erp.duxsoftware.com.ar/WSERP/rest/services/items';

const getController = async () => {
    const { data } = await axios.get(`${URL}`, {
        params: { limit: '50' },
        headers: {
            accept: 'application/json',
            authorization: DUX_TOKEN
        }
    });
    const dataOK = data.results.map(product => ({
        sku: product.cod_item,
        nombre: product.item,
        price: product.precios[1].precio,
        active: product.stock[1].ctd_disponible > 0 ? 1 : 0,
        maximum_sales_quantity: product.stock[1].ctd_disponible
    }))
    return dataOK;
}

module.exports = getController