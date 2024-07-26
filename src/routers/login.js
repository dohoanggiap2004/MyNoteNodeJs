const express = require('express');
const router = express.Router();
const loginController = require('../app/controllers/LoginController.js');

router.get('/login', loginController.login)
router.post('/login/user', loginController.check)
router.get('/logout', loginController.out)

module.exports = router;
