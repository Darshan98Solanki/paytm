const express = require("express");
const routerUser = require('./user')
const routerAccount = require('./account')
const routerPau = require('./pau')
const router = express.Router()

router.use('/user', routerUser)
router.use('/account', routerAccount)
router.use('/pau', routerPau)

module.exports = {
    router
}