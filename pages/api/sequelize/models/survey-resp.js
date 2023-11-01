const Sequelize = require("sequelize");
const db = require("../config/db");

const Survey = db.define("Survey-resp", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	resp: {
		type: Sequelize.TEXT,
		allowNull: false,
	},
});
module.exports = Survey;