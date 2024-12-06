const express = require('express')
const router = express.Router()
const { middleWear } = require('../middlewear')
const { accounts, transactions } = require('../db')
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

    if (amount > 0) {
        const account = await accounts.findOne({ userId: req.userId }).session(session)

        if (!account || account.balance < amount) {
            await session.abortTransaction()
            res.status(422).json({ message: 'Insufficient balance' })
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
        await transactions.create({ From: req.userId, To: to, amount: amount, timestamp: new Date() })

        // complete transaction
        await session.commitTransaction()
        res.status(200).json({ message: "Amount sent successfully" })
    } else {
        res.status(404).json({ message: "Amount should be greater than 0" })
    }
})

router.get('/transactions', middleWear, async (req, res) => {

    const data = await transactions.aggregate([
        {
            $match : {
                From: new mongoose.Types.ObjectId(req.userId)
            }
        },  
        {
            $lookup: {
                from: 'users',
                localField: 'To',
                foreignField: '_id',
                as: 'ToUser'
            }
        }
        , {
            $project: {
                amount: 1,
                UserId: { $arrayElemAt: ['$ToUser._id',0]},
                FirstName: { $arrayElemAt: ['$ToUser.firstname', 0] },
                LastName: { $arrayElemAt: ['$ToUser.lastname', 0] },
                timestamp:1
            }
        }
    ])

    res.send(data)
})

module.exports = router
