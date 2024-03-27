'use strict'
const { 
	findSongById,
	findAllSongs
} = require('../models/repo/song.repo')

const {
	getArtistById
} = require('../utils')

class SongService {
	static getAllSongs = async () => {
		const songs = await findAllSongs()
		
		const payload = songs.map(song => ({
			id: song.song_id,
			title: song.song_title,
			duration: song.song_duration,
			song_artist_names: getArtistById(song.song_artists_id),
			likes: song.song_likes,
			song_url: process.env.DO_SONG + song.song_id + '.mp3',
			thumbnail_url: process.env.DO_THUMBNAIL + song.song_id + 'x96.jpg',
			cover_url: process.env.DO_THUMBNAIL + song.song_id + 'x240.jpg',
			lyric_url: process.env.DO_LYRIC + song.song_id + '.lrc'
		}))

		return payload
	}
}

module.exports = SongService