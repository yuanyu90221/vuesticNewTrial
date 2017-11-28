const {KycUsers} = require('../models/kyc-users')

let KycUserDao = {
  findAllByCritera: (criteria, callback) => {
    // console.log(criteria, callback)
    return KycUsers.find(criteria, callback)
  },
  findOneByCritera: (critera) => {
    return KycUsers.findOne(critera)
  }
}
module.exports = KycUserDao
