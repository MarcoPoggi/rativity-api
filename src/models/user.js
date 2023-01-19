const { DataTypes } = require('sequelize');
const { database } = require('../database/database.js');

const User = database.define('user', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [4, 30],
            isAlphanumeric: true
        }
    },
    passwordEncrypted: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
            len: [10, 30]
        }
    },
    avatar: {
        type: DataTypes.TEXT,
        allowNull: false
        // DefaultValue: Imagen default
    }
})

module.exports = { User }