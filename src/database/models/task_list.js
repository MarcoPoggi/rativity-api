'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class TaskList extends Model {
    static associate(models) {
      // define association here
    }
  }

  TaskList.init(
    {
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
      is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      }
    },
    {
      sequelize,
      modelName: 'TaskList',
      tableName: 'task_lists'
    }
  );

  return TaskList;
};