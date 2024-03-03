'use strict'

const express = require('express')
const AlbumController = require('../../controllers/album.controller')
const asyncHandler = require('../../helpers/asyncHandler')
const router = express.Router()

module.exports = router