'use strict'

const { SuccessResponse } = require('../core/success.response')
const PlaylistService = require('../services/playlist.service')

class PlaylistController {
    getAllPlaylistAdmin = async (req, res, next) => {
        new SuccessResponse({
            message: 'Get all playlist successfully!',
            metadata: await PlaylistService.getAllPlaylistAdmin()
        }).send(res)
    }

    getDiscover = async (req, res, next) => {
        new SuccessResponse({
            message: 'Get discover playlist successfully!',
            metadata: await PlaylistService.getDiscover()
        }).send(res)
    }

    getTop100 = async (req, res, next) => {
        new SuccessResponse({
            message: 'Get top 100 playlist successfully!',
            metadata: await PlaylistService.getTop100()
        }).send(res)
    }
}

module.exports = new PlaylistController()