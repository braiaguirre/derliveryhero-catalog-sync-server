const  axios  = require('axios');
const { DUX_TOKEN_256100, DUX_TOKEN_271082 } = process.env;

const URL = 'https://erp.duxsoftware.com.ar/WSERP/rest/services/items';

const getController = async (id) => {
    let offset = 0;
    let allProducts = [];
    
    while (true) {
        await new Promise(resolve => setTimeout(resolve, 5000));
        console.log(`Vendor: ${id} | Page: ${ offset / 50 } | Offset: ${ offset }`);

        const { data } = await axios.get(`${URL}`, {
            params: { limit: '50', offset: offset },
            headers: { accept: 'application/json', authorization: Number(id) === 271082 ? DUX_TOKEN_271082 : DUX_TOKEN_256100 }
        });

        allProducts.push(
            ...data.results.map(product => ({
                sku: product.cod_item,
                nombre: product.item,
                price: Number(product.precios[1].precio),
                active: product.stock[1].ctd_disponible > 0 ? 1 : 0,
                maximum_sales_quantity: Number(product.stock[1].ctd_disponible)
            }))
        );

        if (data.results.length < 50) break;
        offset += 50;
    };
    return allProducts;
}

module.exports = getController