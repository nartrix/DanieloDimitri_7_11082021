const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser')
const Sequelize = require('sequelize');
const dbConfig = require("./config/db.config");

const authRoutes = require('./routes/auth');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
  
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
});

sequelize.authenticate().then(function (success) {

  console.log("Successfully we are connected with the database");
}).catch(function (error) {

  console.log(error);
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

const app = express();

app.use(cors({origin: 'http://localhost:3000'}));

app.use(bodyParser.json())

app.use('/api/auth', authRoutes);


module.exports = app;