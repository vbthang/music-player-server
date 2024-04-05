'use strict'
const { 	
    findAllPlaylistAdmin,
	findPlaylistByUserId,
	findPlaylistById,
} = require('../models/repo/playlist.repo')

class PlaylistService {
    static getAllPlaylistAdmin = async () => {
        const playlists = await findAllPlaylistAdmin()
        return playlists
    }
}

module.exports = PlaylistService