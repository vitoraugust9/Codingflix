"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'codingflix_development',
    username: 'codingflix',
    password: 'codingflix',
    define: {
        underscored: true
    }
});
exports.database = new sequelize_1.Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'codingflix_development',
    username: 'codingflix',
    password: 'codingflix',
    define: {
        underscored: true
    }
});
