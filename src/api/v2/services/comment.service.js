'use strict'
const { 
	getCommentsBySongId
} = require('../models/repo/comment.repo')

const {
    NotFoundError,
    BadRequestError
} = require('../core/error.response');
const commentModel = require('../models/comment.model');

class CommentService {

	static getCommentsBySongId = async ({ songId }) => {
		const comments = await getCommentsBySongId({ songId })
        if(!comments) return []

        const payload = comments.reduce((acc, comment) => {
            acc.push({
                id: comment.id,
                songId: comment.songId,
                email: comment.email,
                content: comment.content,
            });
            return acc;
        }, []);
        return payload
	}

    static setComment = async({ songId, email, content }) => {
        console.log(songId + "   " + email + "   " + content);
        const index = await commentModel.countDocuments()

        await commentModel.create({
            id: "Comment" + index,
            songId: songId,
            email: email,
            content: content
        })

        return await this.getCommentsBySongId({ songId })
    }  
}

module.exports = CommentService