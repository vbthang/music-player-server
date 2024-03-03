'use strict'

const songModel = require('../song.model')

const insertSong = async ({
  id,
  title,
  artists_id,
  duration,
  likes,
  play_counter,
  categories,
  stream_path,
  thumbnail_path,
  thumbnailM_path,
  lyric_path
}) => {
  return await songModel.create({
    song_id: id,
    song_title: title,
    song_artists_id: artists_id,
    song_duration: duration,
    song_likes: likes,
    song_play_counter: play_counter,
    song_categories: categories,
    song_stream_path: stream_path,
    song_thumbnail_path: thumbnail_path,
    song_thumbnailM_path: thumbnailM_path,
    song_lyric_path: lyric_path,
  })
}

const findSong = async ({ song_id }) => {
  return await songModel.findOne({song_id: song_id})
}

module.exports = {
  insertSong,
  findSong
}