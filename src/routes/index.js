const express = require('express')
// const jwt = require('../middlewares/jwt')
const router = express.Router()

router.get('/', require('./health-check'))
// router.use(jwt())

router.use('/api/user', require('./user'))
router.use('/api/article', require('./article'))

module.exports = router