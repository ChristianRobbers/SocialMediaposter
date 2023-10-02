const express = require('express')
const checkAuth = require('../Middleware/checkAuth.middleware')
const userController = require('../Controllers/user.controller')
const router = express.Router();

router.post('/register', userController.userRegister)
router.post('/login', userController.userLogin)

module.exports = router