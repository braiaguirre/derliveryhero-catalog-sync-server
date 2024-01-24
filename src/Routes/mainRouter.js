const Router = require('express')

const getHandler = require('../Handlers/getHandler')
const updateHandler = require('../Handlers/updateHandler')

const mainRouter = Router()

mainRouter.get('/products/:id', getHandler)
mainRouter.put('/products/', updateHandler)

module.exports = mainRouter