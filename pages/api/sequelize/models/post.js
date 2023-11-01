const Sequelize = require("sequelize");
const db = require("../config/db");

const Post = db.define("Post", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
});
module.exports = Post;