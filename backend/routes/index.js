const express = require("express");
const routerUser = require('./user')
const routerAccount = require('./account')
const router = express.Router()

router.use('/user', routerUser)
router.use('/account', routerAccount)

module.exports = {
    router
}