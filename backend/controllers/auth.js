const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cryptoJs = require('crypto-js');
const db = require('../middlewares/db');
const Users = db.users;

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
    .then(async hash => {
      try {
        const user = await Users.create({
          email: cryptoJs.HmacSHA512(req.body.email, 'RANDOM_KEY_SECRET').toString(),
          username: req.body.username,
          password: hash,
        })
        res.send('message: utilisateur créer');
      } catch (error) {
        console.error(error);
        res.status(400).json({ error : 'erreur db' })
      }
    })
    .catch(error => res.status(500).json({ error: 'erreur serveur' }));
};

exports.login = async (req, res, next) => {
    try {
      const user = await Users.findOne({ email: cryptoJs.HmacSHA512(req.body.email, 'RANDOM_KEY_SECRET').toString(), }) // get mail encrypt
      if (!user) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }
      bcrypt.compare(req.body.password, user.password) // compares the database password with the user password
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          console.log(user.id);
          res.status(200).json({
            userId: user.id,
            token: jwt.sign(
                { userId: user.id },
                'RANDOM_TOKEN_SECRET',
                { expiresIn: '24h' }  // add the token to the user id and expire in 24h
            )
          });
        })
        .catch(error => res.status(500).json({ error }));
    } catch (error) {
      res.status(500).json({ error: 'erreur serveur' });
    } 
};

