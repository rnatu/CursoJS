"use strict";require('dotenv').config();

// # configuração de conexão com o banco de dados
// Utilizar o tipo de módulo do commonJS com module.exports, devido a utilização do sequelize
module.exports = {
  dialect: 'mariadb',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  dafine: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    // createdAt: 'created_at',
    // updatedAt: 'updated_at',
  },
  dialectOptions: {
    timezone: 'America/Sao_Paulo',
  },
  timezone: 'America/Sao_Paulo',
};
