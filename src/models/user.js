const { DataTypes } = require('sequelize');
const { database } = require('../database/database');

const User = database.define('user', {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    passwordEncrypted: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    avatar: {
        type: DataTypes.TEXT,
        allowNull: false
        // DefaultValue: Imagen default
    }
})

module.exports = { User }