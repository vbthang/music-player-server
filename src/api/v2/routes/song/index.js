'use strict'

const express = require('express')
const SongController = require('../../controllers/song.controller')
const asyncHandler = require('../../helpers/asyncHandler')
const router = express.Router()

router.get('', asyncHandler(SongController.getAllSongs))

module.exports = router