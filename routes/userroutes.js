const express = require('express')
const router = express.Router()
const loginRoute = require('../controller/login')
const signRoute = require('../controller/signup')

router.post('/login', loginRoute.login)
router.post('/signup', signRoute.signup)

module.exports = router