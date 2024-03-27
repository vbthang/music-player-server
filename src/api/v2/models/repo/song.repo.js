'use strict'

const songModel = require('../../../v1/models/song.model')

const findSongById = async ({ song_id }) => {
  return await songModel.findOne({song_id: song_id})
}

const findAllSongs = async () => {
    return await songModel.find()
}

module.exports = {
  findSongById,
  findAllSongs
}