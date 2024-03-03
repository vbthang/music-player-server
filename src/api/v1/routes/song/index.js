'use strict'

const express = require('express')
const SongController = require('../../controllers/song.controller')
const asyncHandler = require('../../helpers/asyncHandler')
const router = express.Router()

router.get('/all-info/:song_id', asyncHandler(SongController.getAllInfoSong))

module.exports = router