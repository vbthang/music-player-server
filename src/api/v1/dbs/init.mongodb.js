'use strict'

const mongoose = require('mongoose')
const {db: { uri }} = require('../../../config/config.mongodb')

class Database {

  constructor() {
    this.connect()
  }

  connect(type = 'mongodb') {
    if(1 === 1) {
      mongoose.set('debug', true)
      mongoose.set('debug', { color: true })
    }

    mongoose.connect(uri, {
      maxPoolSize: 50
    })
      .then( _ => console.log('Connect to MongoDB successfully'))
      .catch((err) => {
        console.log('Connect to MongoDB failure')
      })
  }

  static getInstance() {
    if(!Database.instance) {
      Database.instance = new Database()
    }

    return Database.instance
  }
}

const instanceMongodb = Database.getInstance()

module.exports = instanceMongodb