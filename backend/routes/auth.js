const express = require('express');
const router = express.Router();

const authCtrl = require('../controllers/auth');
const auth = require('../middlewares/auth');
const passwordValidator = require('../middlewares/password-validator');

router.post('/signup', passwordValidator, authCtrl.signup);
router.post('/login', authCtrl.login);

module.exports = router;