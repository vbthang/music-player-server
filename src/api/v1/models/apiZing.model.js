'use strict'

const { requestZingMp3 } = require('../utils')

class SongModel {
  static findSongById = async (id) => {
    return await requestZingMp3('/api/v2/song/get/streaming', id).then(res => res.data);
  }

  static findInfoSongById = async (id) => {
    const {
      encodeId, 
      title,
      artists,
      thumbnail,
      thumbnailM,
      duration,
      hasLyric,
      like,
      listen,
      alias,
      genreIds
    } = await requestZingMp3('/api/v2/song/get/info', id).then(res => res.data)
    return {
      encodeId, 
      title,
      artists,
      thumbnail,
      thumbnailM,
      duration,
      hasLyric,
      like,
      listen,
      alias,
      genreIds
    }
  }

  static findLyricById = async (id) => {
/*
    startTime: 81(giây) | 06 | 0
    data: từ
*/
    const res = await requestZingMp3('/api/v2/lyric/get/lyric', id);
    const { sentences, file } = res.data
    return {
      sentences, file
    }
  }

  static getAllInfoSongById = async (songId) => {
    const { 
      file 
    } = await this.findLyricById(songId)

    const {      
      encodeId, 
      title,
      artists,
      thumbnail,
      thumbnailM,
      duration,
      like,
      listen,
      alias,
      genreIds
    } = await this.findInfoSongById(songId)

    const data = await this.findSongById(songId)
    
    const artist_id = artists.reduce((arr, artist) => artist.id, [])
    return {
      id: encodeId,
      title: title,
      artists_id: artist_id,
      alias: alias,
      duration: duration,
      likes: like,
      play_counter: listen,
      categories: genreIds,
      stream_path: data['128'],
      thumbnail_path: thumbnail,
      thumbnailM_path: thumbnailM,
      lyric_path: file,
    }
  }
}

class AlbumModel {

}

class PlaylistModel {

  
  static findPlaylistsTop100 = async () => {
    const res = await requestZingMp3('/api/v2/page/get/top-100');
    let arr = []
    res.data.forEach(item => {
      const {sectionType, title, items} = item
      let subArr = []
      items.forEach(item => {
        subArr.push({
          id: item.encodeId,
          title: item.title,
          thumbnail: item.thumbnail
        })
      })
      arr.push({
        type: sectionType,
        title: title,
        items: subArr
      })
    });
    return arr
  }

  static findInfoPlaylistById = async (id) => {
    const res = await requestZingMp3('/api/v2/page/get/playlist', id)
    const songs = res.data.song.items
    let i = 1;
    return songs.reduce((arr, song) => {
      const {encodeId, title} = song
      arr.push({
        index: i++,
        id: encodeId,
        title
      })
      return arr
    }, [])
  }
}

module.exports = {
  SongModel,
  AlbumModel,
  PlaylistModel
}
