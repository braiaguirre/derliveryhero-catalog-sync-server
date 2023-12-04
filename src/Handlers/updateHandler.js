const updateController = require("../Controllers/updateController")

const updateHandler = async (req, res) => {
    try {
        console.log(req.body)
        const updateData = req.body
        const response = await updateController(updateData)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = updateHandler