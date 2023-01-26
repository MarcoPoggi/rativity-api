'use strict';

const { Model } = require('sequelize');
const { REGEXP_SECURE_PASSWORD, REGEXP_URL } = require('../../helpers/constants');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(models.Task, { foreignKey: "user_id" })
    }
  }

  User.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: "username cannot be empty."
        }
      },
      passwordEncrypted: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: {
            args: REGEXP_SECURE_PASSWORD,
            msg: "password must contain 8 characters, a lowercase letter, an uppercase letter and a digit."
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: "email entered is not correct."
          }
        }
      },
      avatar: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: 'https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg',
        validate: {
          is:{
            args: REGEXP_URL,
            msg: "avatar url provided is not secure."
          }
        }
      }
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users',
      indexes: [{ unique: true, fields: ['email'] }],
    }
  );

  return User;
};