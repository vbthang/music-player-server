'use strict'

const dev = {
  app: {
    port: process.env.DEV_APP_PORT || 8000
  },
  db: {
    uri: `mongodb+srv://${process.env.DEV_DB_USERNAME}:${process.env.DEV_DB_PASSWORD}@musicplayer.htmy8qh.mongodb.net/PlayerMusic?retryWrites=true&w=majority&appName=MusicPlayer`
  }
}

const config = {dev}
const env = process.env.NODE_ENV || 'dev'

module.exports = config[env]