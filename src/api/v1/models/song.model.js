'use strict'

const { Schema, model } = require('mongoose')
const slugify = require('slugify')

const DOCUMENT_NAME = 'Song'
const COLLECTION_NAME = 'Songs'

let songSchema = new Schema({
  song_id: { type: String, required: true },
  song_title: { type: String, required: true },
  song_artists_id: { type: Array, required: true },
  song_duration: { type: Number, required: true },
  song_likes: { type: Number, required: true },
  song_play_counter: { type: Number, required: true },
  song_categories: { type: Array, required: true },
  song_stream_path: { type: String, required: true },
  song_thumbnail_path: { type: String, required: true },
  song_thumbnailM_path: { type: String, required: true },
  song_lyric_path: { type: String, required: true },
  song_slug: { type: String },
}, {
  timestamps: true,
  collection: COLLECTION_NAME
})

songSchema.pre('save', function( next ) {
  console.log('Create Slug')
  this.song_slug = slugify(this.song_title, { lower: true })
  next()
})

module.exports = model(DOCUMENT_NAME, songSchema)