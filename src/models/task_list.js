const { DataTypes } = require('sequelize');
const { database } = require('../database/database');

const TaskList = database.define('task_list', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = { TaskList }