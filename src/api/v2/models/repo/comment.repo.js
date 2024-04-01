'use strict'

const commentModel = require('../comment.model')


const getCommentsBySongId = async ({ songId }) => {
	return await commentModel.find({
		songId: songId
	})
}

module.exports = {
	getCommentsBySongId,
}