const express = require('express')
const morgan = require('morgan')
const path = require('path')
const app = express()

//static middleware
app.use(express.static(path.join(__dirname, '..', 'public')))

//logging middleware
app.use(morgan('combined'))

//error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error')
})

module.exports = app