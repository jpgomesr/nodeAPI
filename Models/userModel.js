const Sequelize = require("sequelize");
const database = require("../Repository/database");

const usuario = database.define(
   "tb_usuarios",
   {
      id: {
         type: Sequelize.INTEGER,
         autoIncrement: true,
         allowNull: false,
         primaryKey: true,
      },
      nome: {
         type: Sequelize.STRING,
         allowNull: false,
      },
      data_criacao: {
         type: Sequelize.DATE,
         allowNull: false,
      },
   },
   {
      timestamps: false,
   }
);

module.exports = usuario;
