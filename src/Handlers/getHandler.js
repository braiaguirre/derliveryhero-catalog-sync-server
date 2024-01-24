const getController = require("../Controllers/getController");

const getHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await getController(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json(error.message);
    };
};

module.exports = getHandler;