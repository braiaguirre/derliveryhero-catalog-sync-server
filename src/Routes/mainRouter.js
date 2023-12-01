const Router = require('express')

const updateHandler = require('../Handlers/updateHandler')

const mainRouter = Router()

mainRouter.get('/update', updateHandler)

module.exports = mainRouter