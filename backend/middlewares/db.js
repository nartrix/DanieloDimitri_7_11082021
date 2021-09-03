const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('../models/user') (sequelize, Sequelize);
db.posts = require('../models/post') (sequelize, Sequelize);
db.comments = require('../models/comment') (sequelize, Sequelize);

/* db.users.belongsToMany(db.posts, {
  through: "user_posts",
  foreignKey: "ownerId"
}); */
db.users.hasMany(db.posts);
db.posts.belongsTo(db.users);
db.posts.hasMany(db.comments);
db.comments.belongsTo(db.posts);
db.comments.belongsTo(db.users);

module.exports = db;