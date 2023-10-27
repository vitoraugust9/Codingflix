"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const database_1 = require("../database");
const sequelize_1 = require("sequelize");
exports.Category = database_1.database.define('categories', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING
    },
    position: {
        allowNull: false,
        unique: true,
        type: sequelize_1.DataTypes.INTEGER
    }
});
