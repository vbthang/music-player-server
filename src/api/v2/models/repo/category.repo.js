'use strict'

const categoryModel = require('../category.model')

const fakeData = async () => {
	const categories = [
		{
			category_id: "C1",
            category_title: 'Nhạc việt',
			category_thumbnail: "https://music-player.sgp1.digitaloceanspaces.com/song_thumbnail/Z7UFIUCUx96.jpg",
			category_backcolor: "#8BEEFF",
			category_playlists: ["PL01", "PL02", "PL03", "PL04"]
		},
		{
			category_id: "C2",
            category_title: 'Nhạc hàn',
			category_thumbnail: "https://music-player.sgp1.digitaloceanspaces.com/song_thumbnail/Z7UFIUCUx96.jpg",
			category_backcolor: "#8BEEFF",
			category_playlists: ["PL01", "PL02", "PL03", "PL04"]
		},
		{
			category_id: "C3",
            category_title: 'Nhạc trung',
			category_thumbnail: "https://music-player.sgp1.digitaloceanspaces.com/song_thumbnail/Z7UFIUCUx96.jpg",
			category_backcolor: "#8BEEFF",
			category_playlists: ["PL01", "PL02", "PL03", "PL04"]
		},
		{
			category_id: "C4",
            category_title: 'Nhạc anh mĩ',
			category_thumbnail: "https://music-player.sgp1.digitaloceanspaces.com/song_thumbnail/Z7UFIUCUx96.jpg",
			category_backcolor: "#8BEEFF",
			category_playlists: ["PL01", "PL02", "PL03", "PL04"]
		},
	];
	await categoryModel.create(categories)
}

const findAllCategories = async () => {
	// await fakeData()
    return await categoryModel.find({})
}

module.exports = {
	findAllCategories,
}