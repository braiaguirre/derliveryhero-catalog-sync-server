const  axios  = require('axios');
const { DELIVERY_HERO_API_URL, DELIVERY_HERO_TOKEN } = process.env

const updateController = async (updateData) => {
    axios.defaults.headers.common = { 'Authorization': `Bearer ${DELIVERY_HERO_TOKEN}` }
    // const { data } = await axios.put(DELIVERY_HERO_API_URL, updateData)
    return 'data'

}

module.exports = updateController