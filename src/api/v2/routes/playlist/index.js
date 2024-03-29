'use strict'

const express = require('express')
const PlaylistController = require('../../controllers/playlist.controller')
const asyncHandler = require('../../helpers/asyncHandler')
const router = express.Router()

router.get('', asyncHandler(PlaylistController.getAllPlaylistAdmin))

module.exports = router