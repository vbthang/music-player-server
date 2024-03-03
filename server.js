const app = require('./src/app')

const PORT = process.env.DEV_APP_PORT || 8000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

process.on('SIGINT', () => {
  console.log(`\nServer stopped.`)
  process.exit()
})