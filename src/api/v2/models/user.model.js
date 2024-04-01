'use strict'

const { Schema, model } = require('mongoose')
const slugify = require('slugify')

const DOCUMENT_NAME = 'User'
const COLLECTION_NAME = 'Users'

let userSchema = new Schema({
  id: { type: String, required: true },
	name: { type: String, required: true, },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
	playlists: {
		type: Array,
		default: []
	}
}, {
  timestamps: true,
  collection: COLLECTION_NAME
})

module.exports = model(DOCUMENT_NAME, userSchema)