'use strict'

const playlistModel = require('../playlist.model')

const fakeData = async () => {
	const playlists = [
		{
			playlist_id: "PL01",
			playlist_userId: "Admin",
			playlist_title: "Nhạc thật Chill",
			playlist_description: "Description for Playlist 1",
			playlist_thumbnail: "https://music-player.sgp1.digitaloceanspaces.com/song_thumbnail/Z7UFIUCUx96.jpg",
			playlist_cover: "https://music-player.sgp1.digitaloceanspaces.com/song_thumbnail/Z7UFIUCUx96.jpg",
			playlist_songs: ['Z6EZZWAD', 'Z6FWCOO0', 'Z6I76897',
			'Z6I7OBZD', 'Z6UD089Z', 'Z6UUABUW', 'Z6WZD78I',]
		},
		{
			playlist_id: "PL02",
			playlist_userId: "Admin",
			playlist_title: "Những ngày sống chậm",
			playlist_description: "Description for Playlist 2",
			playlist_thumbnail: "https://music-player.sgp1.digitaloceanspaces.com/song_thumbnail/Z7UFIUCUx96.jpg",
			playlist_cover: "https://music-player.sgp1.digitaloceanspaces.com/song_thumbnail/Z7UFIUCUx96.jpg",
			playlist_songs: ['Z7U6DOBB', 'Z7UAOCZ0', 'Z7UFIUCU',
			'Z7UUAFUF', 'Z7W0B7U6', 'Z7W0O8UO', 'Z7WCEUF9', 'Z7WDB8DO']
		},
		{
			playlist_id: "PL03",
			playlist_userId: "Admin",
			playlist_title: "Cà phê quán quen",
			playlist_description: "Description for Playlist 3",
			playlist_thumbnail: "https://music-player.sgp1.digitaloceanspaces.com/song_thumbnail/Z7UFIUCUx96.jpg",
			playlist_cover: "https://music-player.sgp1.digitaloceanspaces.com/song_thumbnail/Z7UFIUCUx96.jpg",
			playlist_songs: ['Z6600ZCO', 'Z66IBDW0', 'Z6708WAZ', 'Z6709W0Z', 'Z677ODE7',
			'Z6797BZD', 'Z696WZ06']
		},
		{
			playlist_id: "PL04",
			playlist_userId: "Admin",
			playlist_title: "Cho ngày làm việc",
			playlist_description: "Description for Playlist 4",
			playlist_thumbnail: "thumbnail4.jpg",
			playlist_cover: "https://music-player.sgp1.digitaloceanspaces.com/song_thumbnail/Z7UFIUCUx96.jpg",
			playlist_songs: ['Z69AO98C', 'Z69C9IB7', 'Z6AABFU6',
			'Z6ACUFEI', 'Z6AFC9WD', 'Z6AIA0I8', 'Z6B7O6W7', 'Z6DA0D09',
			'Z6ED68UB', 'Z6EUB99Z', 'Z6EZZWAD', 'Z6FWCOO0', 'Z6I76897',
			'Z6I7OBZD', 'Z6UD089Z', 'Z6UUABUW']
		},
		{
			playlist_id: "PL05",
			playlist_userId: "Admin",
			playlist_title: "Thiên hạ nghe gì",
			playlist_description: "Description for Playlist 5",
			playlist_thumbnail: "thumbnail5.jpg",
			playlist_cover: "https://music-player.sgp1.digitaloceanspaces.com/song_thumbnail/Z7UFIUCUx96.jpg",
			playlist_songs: ['Z70OZIIB', 'Z70UUZU0',
			'Z7I6BCCO', 'Z7I8899A', 'Z7IADBDF', 'Z7IBDFI7', 'Z7IBO90D',
			'Z7IOEUZ0', 'Z7O9AZCO', 'Z7OB97FO', 'Z7ODDFD7', 'Z7ODDU7I']
		}
	];

	await playlistModel.create(playlists)
}

const findAllPlaylistAdmin = async () => {
	// await fakeData()

	return await playlistModel.find({
		playlist_userId: 'Admin'
	})
}

const findPlaylistByUserId = async ({ userId }) => {
	return await playlistModel.findOne({
		playlist_userId: userId
	})
}

const findPlaylistById = async ({ id }) => {
	return await playlistModel.findOne({
		playlist_id: id
	})
}

module.exports = {
	findAllPlaylistAdmin,
	findPlaylistByUserId,
	findPlaylistById,
}