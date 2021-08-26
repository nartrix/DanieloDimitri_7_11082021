const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser')
const Sequelize = require('sequelize');

const authRoutes = require('./routes/auth');

const db = require('./middlewares/db')

async function connection() {
  try {
    await sequelize.authenticate();
    console.log('ok');
  } catch (error) {
    console.error(error);
  }
}

connection();

db.sequelize.sync();

const app = express();

app.use(cors({origin: 'http://localhost:3000'}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/api/auth', authRoutes);

module.exports = app;