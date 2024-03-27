'use strict'

const { SuccessResponse } = require('../core/success.response')
const SongService = require('../services/song.service')

class SongController {
    getAllSongs = async (req, res, next) => {
        new SuccessResponse({
            message: 'Get all songs successfully!',
            metadata: await SongService.getAllSongs()
        }).send(res)
    }
}

module.exports = new SongController()