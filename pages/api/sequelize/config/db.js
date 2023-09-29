const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres.wmcplksxpqgwnwmrjjrn:testeemail2000@aws-0-sa-east-1.pooler.supabase.com:6543/postgres',
    { dialect: 'postgres' });

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