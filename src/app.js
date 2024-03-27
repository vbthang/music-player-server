
require('dotenv').config()
const compression = require('compression')
const express = require('express')
const { default: helmet } = require('helmet')
const morgan = require('morgan')
const app = express()
const cors = require('cors')
const { NotFoundError } = require('./api/v1/core/error.response')

// init middlewares
// app.use(express.json())
app.use(cors({ 
  origin: '*'
}))
app.use(morgan("dev"))
app.use(helmet()) // Ngăn chặn bên thứ 3 đọc thông tin nhạy cảm
app.use(compression()) // Nén dữ liệu trước khi gửi đi => Giảm dữ liệu gửi đi => Giảm chi phí
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

require('./api/v1/dbs/init.mongodb')

app.use('/api/v1', require('./api/v1/routes'))
app.use('/api/v2', require('./api/v2/routes'))

app.use((req, res, next) => {
  next(new NotFoundError())
})

app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500
  return res.status(statusCode).json({
    status: 'error',
    code: statusCode,
    message: error.message || 'Internal Server Error'
  })
})

module.exports = app