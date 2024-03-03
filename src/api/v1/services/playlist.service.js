'use strict'

const { PlaylistModel }= require('../models/apiZing.model')

class PlaylistService {

  static getPlaylistsTop100 = async () => {
    return await PlaylistModel.findPlaylistsTop100()
  }

  static getInfoPlaylist = async (id) => {
    return await PlaylistModel.findInfoPlaylistById(id)
  }
}

module.exports = PlaylistService