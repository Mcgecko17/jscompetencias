const FormResult = require('../models/FormResult');

exports.showResults = async (req, res) => {
    try {
        const results = await FormResult.findAll();
        res.json(results);
    } catch (error) {
        res.status(500).send('Error al obtener los resultados');
    }
};