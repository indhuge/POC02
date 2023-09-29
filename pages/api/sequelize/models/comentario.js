const Sequelize = require("sequelize");
const db = require("../config/db");

const Comentario = db.define("Comentario", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	conteudo: {
		type: Sequelize.TEXT,
		allowNull: false,
	},
	idPost: {
		type: Sequelize.TEXT,
		allowNull: false,
	},
	idUsuario: {
		type: Sequelize.TEXT,
		allowNull: false,
	},
});
module.exports = Comentario;