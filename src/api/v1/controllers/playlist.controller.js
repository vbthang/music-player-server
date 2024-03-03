'use strict'

const { SuccessResponse } = require('../core/success.response')
const PlaylistService = require('../services/playlist.service')

class PlaylistController {
  getInfoPlaylist = async (req, res, next) => {
    new SuccessResponse({
      message: 'Get info playlist successfully! Direct api/v1/song/all-info/__id__ to find detail of song',
      metadata: await PlaylistService.getInfoPlaylist(req.params.playlist_id)
    }).send(res)
  }

  getPlaylistsTop100 = async (req, res, next) => {
    new SuccessResponse({
      message: 'Get Playlists \'Top100\' successfully! Please take a playlist\'code to find songs. Director path : /api/v1/playlist/info/__id__',
      metadata: await PlaylistService.getPlaylistsTop100()
    }).send(res)
  }
}

module.exports = new PlaylistController()