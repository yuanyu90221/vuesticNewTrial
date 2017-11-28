const mongoose = require('mongoose')
const {Schema} = mongoose
const {getConnection} = require('../db').dbUtil
const schema = new Schema({
  username: {
    type: String,
    require: true
  },
  validStage: {
    type: String,
    require: true,
    default: 'register'
  },
  appliedTime: {
    type: Date,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  country: {
    type: String,
    require: true
  },
  identity: {
    type: String,
    require: true
  },
  phone: {
    type: String,
    require: true
  }
}, {
  toObject: {
    transform: (doc, ret) => {
      delete ret._id
    }
  },
  toJSON: {
    transform: (doc, ret) => {
      delete ret._id
    }
  }
})
let conn = getConnection()
module.exports.KycUsers = conn.model('Kycusers', schema)
