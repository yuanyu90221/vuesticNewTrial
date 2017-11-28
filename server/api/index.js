const {Router} = require('express')
const router = Router()

router.get('/auth', (req, res, next) => {
  if (!req.session.authUser) {
    res.redirect('/')
  } else {
    next()
  }
})

export default router
