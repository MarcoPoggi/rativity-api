'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Category extends Model {
    static associate(models) {
      // define association here
    }
  }

  Category.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
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
    },
    {
      sequelize,
      modelName: 'Category',
      tableName: 'categories'
    }
  );

  return Category;
};