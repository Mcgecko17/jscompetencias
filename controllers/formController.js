const FormResult = require('../models/FormResult');

exports.showForm = (req, res) => {
    res.sendFile('form.html', { root: 'public' });
};

exports.submitForm = async (req, res) => {
    const { name, email, message } = req.body;
    try {
        await FormResult.create({ name, email, message });
        res.redirect('/results');
    } catch (error) {
        res.status(500).send('Error al guardar el formulario');
    }
};