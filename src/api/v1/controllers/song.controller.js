'use strict'

const { SuccessResponse } = require('../core/success.response')
const SongService = require('../services/song.service')

class SongController {
  getTop100 = async (req, res, next) => {
    new SuccessResponse({
      message: 'Get top 100 song successfully!',
      metadata: await SongService.getTop100()
    }).send(res)
  }

  getAllInfoSong = async (req, res, next) => {
    new SuccessResponse({
      message: 'Get full info song successfully!',
      metadata: await SongService.getAllInfoSong(req.params.song_id)
    }).send(res)
  }
}

module.exports = new SongController()