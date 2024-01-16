const updateController = require("../Controllers/updateController")

const updateHandler = async (req, res) => {
    try {
        const { id, data } = req.body
        const response = await updateController(id, data)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = updateHandler