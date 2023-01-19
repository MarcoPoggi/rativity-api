const { DataTypes } = require('sequelize');
const { database } = require('../database/database.js');

const Task = database.define('task', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 30]
        }
    },
    description: {
        type: DataTypes.TEXT,
        validate: {
            len: [0, 140]
        }
    },
    status: {
        type: DataTypes.ENUM({
            values: ['active', 'completed', 'due', 'deleted']
        }),
        defaultValue: 'active',
        allowNull: false
    },
    dueDate: {
        type: DataTypes.DATE,
        validate: {
            isDate: true,
            async dateValidator(date) {
                if (date < Date.now()) {
                    await Task.update({ status: 'due' })
                }
            }
        }
    },
    duration: {
        type: DataTypes.INTEGER,
        validate: {
            isInt: true,
            min: 0,
            max: 1440
        }
    },
    priority: {
        type: DataTypes.ENUM({
            values: ['none', 'low', 'medium', 'high']
        }),
        defaultValue: 'none'
    }
})

module.exports = { Task };