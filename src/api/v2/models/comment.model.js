'use strict'

const { Schema, model } = require('mongoose')
const slugify = require('slugify')

const DOCUMENT_NAME = 'Comment'
const COLLECTION_NAME = 'Comments'

let commentSchema = new Schema({
  id: { type: String, required: true },
	songId: { type: String, required: true, },
  email: { type: String, required: true},
  content: { type: String, required: true }
}, {
  timestamps: true,
  collection: COLLECTION_NAME
})

module.exports = model(DOCUMENT_NAME, commentSchema)