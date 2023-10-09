const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgresql://postgres:testeemail2000@db.wmcplksxpqgwnwmrjjrn.supabase.co:5432/postgres',
    { dialectModule: require('pg') });

module.exports = sequelize;

/*
var db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Usuario = require("../models/usuario.js")(sequelize, Sequelize);
db.Post = require("../models/post.js")(sequelize, Sequelize);
db.Comentario = require("../models/comentario.js")(sequelize, Sequelize);

db.Comentario.belongsTo(db.Usuario);
db.Comentario.belongsTo(db.Post);

module.exports = db;
*/