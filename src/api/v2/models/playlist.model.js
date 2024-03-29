'use strict'

const { Schema, model } = require('mongoose')
const slugify = require('slugify')

const DOCUMENT_NAME = 'Playlist'
const COLLECTION_NAME = 'Playlists'

let playlistSchema = new Schema({
  playlist_id: { type: String, required: true },
	playlist_userId: { type: String, default: 'Admin'},
  playlist_title: { type: String, required: true },
  playlist_description: { type: String, required: true },
  playlist_thumbnail: { type: String, required: true },
  playlist_cover: { type: String, required: true },
  playlist_thumbnail: { type: String, required: true },
	playlist_songs: {
		type: Array,
		default: []
	}
}, {
  timestamps: true,
  collection: COLLECTION_NAME
})

module.exports = model(DOCUMENT_NAME, playlistSchema)