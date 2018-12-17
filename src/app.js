const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')
const app = express()

app
  .use(bodyParser.urlencoded({extended: true}))
  .use(bodyParser.json({limit: '20MB'}))
  .use('/', routes)
  .use((req, res, next) => {
    res.status(404).json({message: 'Not Found'})
  })

module.exports = app