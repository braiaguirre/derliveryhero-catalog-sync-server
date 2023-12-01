const Router = require('express')

const updateHandler = require('../Handlers/updateHandler')

const mainRouter = Router()

mainRouter.put('/update', updateHandler)

module.exports = mainRouter