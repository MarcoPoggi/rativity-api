const { DataTypes } = require('sequelize');
const { database } = require('../database/database.js');

const Category = database.define('category', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        // 30 characters
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false,
        // default value ?
        // 7 characters ("#f0f0f0")
    },
    description: {
        type: DataTypes.TEXT,
        // allowNull ?
        // 140 characters
    }
})

module.exports = { Category }