'use strict'

const express = require('express')
const SongController = require('../../controllers/song.controller')
const CommentController = require('../../controllers/comment.controller')
const asyncHandler = require('../../helpers/asyncHandler')
const router = express.Router()

router.get('', asyncHandler(SongController.getAllSongs))
router.get('/:id/comments', asyncHandler(CommentController.getCommentsBySongId))
router.post('/:id/comments', asyncHandler(CommentController.setComment))

module.exports = router