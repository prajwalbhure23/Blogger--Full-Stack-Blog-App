const express = require('express')
const { getAllUsers, registerUser, loginUser } = require('../controllers/user.controller')

const router = express.Router()

router.get('/allUsers', getAllUsers)

router.post('/register', registerUser)

router.post('/login', loginUser)

module.exports = router