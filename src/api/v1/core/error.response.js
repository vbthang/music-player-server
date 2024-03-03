'use strict'

const { StatusCode, ReasonStatusCode } = require('./code')

class ErrorResponse extends Error {
  constructor( message, statusCode ) {
    super(message)
    this.statusCode = statusCode
  }
}

class ConflictRequestError extends ErrorResponse {
  constructor( message = ReasonStatusCode.CONFLICT, statusCode = StatusCode.CONFLICT ) {
    super(message, statusCode)
  }
}

class NotFoundError extends ErrorResponse {
  constructor( message = ReasonStatusCode.NOT_FOUND, statusCode = StatusCode.NOT_FOUND ) {
    super(message, statusCode)
  }
}

module.exports = {
  ConflictRequestError,
  NotFoundError
}