const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class User extends Model { }

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: ture
        },

        user_name: {
            type: DataTypes.STRING,
            allowNull: false

        }
    },
    {
        sequelize
    }
);

module.exports = User;
