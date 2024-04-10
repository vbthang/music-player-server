'use strict'
const { 	
    findAllPlaylistAdmin,
    findPlaylistsByIds

} = require('../models/repo/playlist.repo')

class PlaylistService {
    static getAllPlaylistAdmin = async () => {
        const playlists = await findAllPlaylistAdmin()
        return playlists
    }

    static getDiscover = async () => {
        const discoverPlaylists = [
            'b6cb572c-c6ed-4207-8e44-14fddc8feda6',
            'e0972d19-b39a-4837-9dd1-ff31a6cf5710',
            '4e0d50c5-ed75-4462-b509-b4d627467dea',
            '75a94c61-6dcc-4447-b7d8-bb95633b683e',
            'f36dd190-60b6-4e54-aba5-9ad6b5dbbd5e',
        ]
        const playlists = await findPlaylistsByIds(discoverPlaylists)
        const playlistIDs = playlists.map(playlist => playlist.playlist_id)
    
        return playlistIDs
    }

    static getTop100 = async () => {
        const top100Ids = [
            '5e282c62-65e3-42ea-8a64-118525733fc8',
            '61507d84-f930-4db4-b38f-d830f03f3287',
            '79af6510-fea8-44da-85a7-754839edce00',
            'd5ee93e1-1515-4cf7-b355-492fdaeddc85',
            '09d2d23a-7acd-40bd-81cf-198f389f8b84',
            '879637a2-bb29-4b6a-8ffc-3d4b5a32e3e3'
        ]

        const playlists = await findPlaylistsByIds(top100Ids)
        const playlistIDs = playlists.map(playlist => playlist.playlist_id)
    
        return playlistIDs
    }
}

module.exports = PlaylistService