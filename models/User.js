const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class User extends Model { }

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        user_name: {
            type: DataTypes.STRING,
            allowNull: false

        },
        display_name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          bio: {
            type: DataTypes.STRING,
            allowNull: false,
          },
    },
    {
        sequelize
    }
);

module.exports = User;
