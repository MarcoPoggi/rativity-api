const { DataTypes } = require('sequelize');
const database = require('../database/init.js');

const Task = database.define('Task', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
        // 30 characters
    },
    description: {
        type: DataTypes.TEXT,
        // 140 characters
    },
    status: {
        type: DataTypes.ENUM({
            values: ['active', 'completed', 'deleted']
        }),
        allowNull: false,
        // defaultValue: 'active'
    },
    dueDate: {
        type: DataTypes.DATE
    },
    duration: {
        type: DataTypes.INTEGER
        // Greater than 0, less than 1440
    },
    priority: {
        type: DataTypes.ENUM({
            values: ['low', 'medium', 'high']
        })
        // default value ?
    }
})

module.exports = { Task };