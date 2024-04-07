'use strict'

const express = require('express')
const PlaylistController = require('../../controllers/playlist.controller')
const asyncHandler = require('../../helpers/asyncHandler')
const router = express.Router()

router.get('/discover', asyncHandler(PlaylistController.getDiscover))
router.get('/top100', asyncHandler(PlaylistController.getTop100))
router.get('', asyncHandler(PlaylistController.getAllPlaylistAdmin))

module.exports = router