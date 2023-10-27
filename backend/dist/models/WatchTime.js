"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WatchTime = void 0;
const database_1 = require("../database");
const sequelize_1 = require("sequelize");
exports.WatchTime = database_1.database.define('watch_times', {
    seconds: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER
    },
    userId: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    episodeId: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
        references: { model: 'episodes', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    }
});
