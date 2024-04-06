'use strict'

const express = require('express')
const UserController = require('../../controllers/user.controller')
const asyncHandler = require('../../helpers/asyncHandler')
const router = express.Router()

router.post('/login', asyncHandler(UserController.login))
router.post('/register', asyncHandler(UserController.register))
router.post('/update', asyncHandler(UserController.updateFavoriteSong))
router.post('/fwps', asyncHandler(UserController.sendMail))

module.exports = router