'use strict'

const { SuccessResponse } = require('../core/success.response')
const PlaylistService = require('../services/playlist.service')

class PlaylistController {
    getAllPlaylistAdmin = async (req, res, next) => {
        new SuccessResponse({
            message: 'Get all playlist admin successfully!',
            metadata: await PlaylistService.getAllPlaylistAdmin()
        }).send(res)
    }
}

module.exports = new PlaylistController()