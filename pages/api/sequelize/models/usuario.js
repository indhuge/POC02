const Sequelize = require("sequelize");
const db = require("../config/db");

const User = db.define("Usuario", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	nome: {
		type: Sequelize.TEXT,
		allowNull: false,
	},
	email: {
		type: Sequelize.TEXT,
		allowNull: false,
	},
	senha: {
		type: Sequelize.TEXT,
		allowNull: false
	},
});
module.exports = User;