'use strict'

const { SuccessResponse } = require('../core/success.response')
const CommentService = require('../services/comment.service')

class CommentController {
    getCommentsBySongId = async (req, res, next) => {
        new SuccessResponse({
            message: 'Get comments of song successfully!',
            metadata: await CommentService.getCommentsBySongId({songId: req.params.id})
        }).send(res)
    }

    setComment = async (req, res, next) => {
        new SuccessResponse({
            message: 'Set comment successfully!',
            metadata: await CommentService.setComment({
                songId: req.params.id,
                email: req.body.email,
                content: req.body.content
            })
        }).send(res)
    }
}

module.exports = new CommentController()