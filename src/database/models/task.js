'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "user_id" })
    }
  }

  Task.init(
    {
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
        type: DataTypes.ENUM('active', 'completed', 'deleted'),
        allowNull: false,
        defaultValue: 'active'
      },
      dueDate: {
        type: DataTypes.DATE
      },
      duration: {
        type: DataTypes.INTEGER
        // Greater than 0, less than 1440
      },
      priority: {
        type: DataTypes.ENUM('low', 'medium', 'high')
        // default value ?
      }
    },
    {
      sequelize,
      modelName: 'Task',
      tableName: 'tasks',
    }
  );

  return Task;
};