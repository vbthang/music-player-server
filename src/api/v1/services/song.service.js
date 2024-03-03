'use strict'

const { SongModel: Zing }= require('../models/apiZing.model')
const { findSong, insertSong } = require('../models/repo/song.repo')

class SongService {
  static async createSong( payload ) {
    const { id: song_id } = payload
    const song = await findSong({song_id})
    if(!song) {
      insertSong(payload)
    } 
  }

  static getAllInfoSong = async (id) => {
    const payload = await Zing.getAllInfoSongById(id)
    this.createSong(payload)
    return payload
  }
}

module.exports = SongService