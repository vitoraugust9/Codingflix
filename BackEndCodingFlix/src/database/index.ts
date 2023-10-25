import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
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


export const database = new Sequelize({
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