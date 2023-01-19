const { DataTypes } = require('sequelize');
const { database } = require('../database/database.js');

const TaskList = database.define('task_list', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
        // 30 characters
    },
    description: {
        type: DataTypes.TEXT
        // allowNull ?
        // 140 characters
    },
    icon: {
        type: DataTypes.STRING,
        // default value ?
    },
    status: {
        type: DataTypes.ENUM({
            values: ['active', 'deleted']
        }),
        allowNull: false,
        // defaultValue: 'active'
    }
}
)

module.exports = { TaskList }