const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const FormResult = sequelize.define('FormResult', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

module.exports = FormResult;