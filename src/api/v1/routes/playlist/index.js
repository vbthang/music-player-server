'use strict'

const express = require('express')
const PlaylistController = require('../../controllers/playlist.controller')
const asyncHandler = require('../../helpers/asyncHandler')
const router = express.Router()

router.get('/top-100', asyncHandler(PlaylistController.getPlaylistsTop100))
router.get('/info/:playlist_id', asyncHandler(PlaylistController.getInfoPlaylist))

module.exports = router