const express = require('express')
const bodyParser = require('body-parser')
// import api from './api'
const kycUsers = require('./api/kyc-users')
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3300

const session = require('express-session')
app.use(bodyParser.json())
app.use(session({
  secret: 'CoolWallet',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

app.set('port', port)
app.use('/api', kycUsers)
// add api
// app.use('/', api)
app.use('/', express.static('./dist/'))

app.listen(port, host)
console.log('Server listening on ' + host + ':' + port)
