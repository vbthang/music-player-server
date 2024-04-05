'use strict'

const { Schema, model } = require('mongoose')
const slugify = require('slugify')

const DOCUMENT_NAME = 'Category'
const COLLECTION_NAME = 'Categories'

let categorySchema = new Schema({
  category_id: { type: String, required: true },
  category_title: { type: String, required: true },
  category_thumbnail: { type: String, required: true },
  category_backcolor: { type: String, required: true },
	category_playlists: {
		type: Array,
		default: []
	}
}, {
  timestamps: true,
  collection: COLLECTION_NAME
})

module.exports = model(DOCUMENT_NAME, categorySchema)