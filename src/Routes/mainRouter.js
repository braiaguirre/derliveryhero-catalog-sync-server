const Router = require('express')

const updateHandler = require('../Handlers/updateHandler')

const mainRouter = Router()

mainRouter.post('/update', updateHandler)
mainRouter.put('/update', updateHandler)

module.exports = mainRouter