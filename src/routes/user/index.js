const router = require('express').Router()

router.get('/', require('./list'))
// router.get('/:id', require('./get'))
router.post('/', require('./create'))
// router.put('/', require('./update'))
// router.delete('/', require('./delete'))

module.exports = router