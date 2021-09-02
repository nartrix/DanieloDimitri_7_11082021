const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser')
const path = require('path');

const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/post');

const db = require('./middlewares/db')

db.sequelize
    .authenticate()
    .then(() => {
        console.log('Connection to the database has been established successfully');
    })
    .catch(error => {
        console.log('Unable to connect to the database : ', error);
    })

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

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);

module.exports = app;