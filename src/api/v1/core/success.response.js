'use strict'

const { StatusCode, ReasonStatusCode } = require('./code')

class SuccessResponse {
  constructor({message, statusCode = StatusCode.OK, reasonStatusCode = ReasonStatusCode.OK, metadata = {}}) {
    this.message = !message ? reasonStatusCode : message
    this.status = statusCode
    this.metadata = metadata
  }

  send(res, headers = {}) {
    return res.status(this.status).json(this)
  }
}

module.exports = {
  SuccessResponse
}