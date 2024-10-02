const express = require('express')
const router = express.Router()
const { middleWear } = require('../middlewear')
const { accounts } = require('../db')
const mongoose = require('mongoose')

router.get('/balance', middleWear, async (req, res) => {

    const account = await accounts.findOne({
        userId: req.userId
    })

    res.status(200).json({ balance: account.balance })

})

router.put('/transfer', middleWear, async (req, res) => {

    const session = await mongoose.startSession()

    session.startTransaction()
    const { amount, to } = req.body

    const account = await accounts.findOne({ userId: req.userId }).session(session)

    if (!account || account.balance < amount) {
        await session.abortTransaction()
        console.log('check')
        res.status(400).json({ message: 'Insufficient balance' })
        return
    }

    const toAccount = await accounts.findOne({ userId: to }).session(session)

    if (!toAccount) {
        await session.abortTransaction()
        res.status(404).json({ message: "Invalid account" })
        return
    }

    // main transaction
    await accounts.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session)
    await accounts.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session)

    // complete transaction
    await session.commitTransaction()
    res.status(200).json({message:"Amount sent successfully"})
})

module.exports = router
