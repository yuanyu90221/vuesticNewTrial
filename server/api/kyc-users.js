const {Router} = require('express')
let KycUserDao = require('../dao/kyc-users')
let router = Router()
router.get('/kyc-users', (req, res, next) => {
  // console.log(req)
  KycUserDao.findAllByCritera({}, (err, result) => {
    console.log(result)
    if (err) res.json({err: err.message})
    else {
      console.log(result)
      res.json({result: result})
    }
  })
  // .error((err) => {
  //   res.status(400).json({err: err.message})
  // })
})
module.exports = router
