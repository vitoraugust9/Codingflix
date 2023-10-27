"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Like = void 0;
const database_1 = require("../database");
const sequelize_1 = require("sequelize");
exports.Like = database_1.database.define('likes', {
    userId: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    courseId: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
        references: { model: 'courses', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    }
});
