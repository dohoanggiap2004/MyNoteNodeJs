const express = require('express');
const router = express.Router();
const signUpController = require('../app/controllers/SignUpController.js');

router.get('/sign_up', signUpController.signUp)
router.post('/sign_up/user', signUpController.save)

module.exports = router;
