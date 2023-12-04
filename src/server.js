const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const mainRouter = require("./Routes/mainRouter")
const bodyParser = require('body-parser');

const server = express()

server.use(morgan("dev"))
server.use(cors())
server.use(express.json({ limit: '10mb' }));
server.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
server.use(express.json())
server.use(mainRouter)
module.exports = server
