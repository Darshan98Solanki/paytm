const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()
const { users, accounts } = require('../db')
const { userSchema, updateUserSChema, userSingIn } = require('../types')
const jwt = require('jsonwebtoken')
const JWT_SECRET = require('../config')
const { middleWear } = require("../middlewear")
const saltRounds = 10

router.post('/signup', async (req, res) => {

    const data = req.body
    const parseData = userSchema.safeParse(data)

    if (!parseData.success) {
        res.status(401).json(parseData.error.issues[0].message)
        return
    } else {
        const username = parseData.data.username
        const checkUserExist = (await users.findOne({ username })) == null ? false : true

        if (!checkUserExist) {
            bcrypt.genSalt(saltRounds, (err, salt) => {
                bcrypt.hash(parseData.data.password, salt, async (err, hash) => {

                    const firstname = parseData.data.firstname
                    const lastname = parseData.data.lastname

                    const user = await users.create({
                        username,
                        password:hash,
                        firstname,
                        lastname
                    })

                    const userId = user._id

                    // creating a new account 

                    await accounts.create({
                        userId,
                        balance: 7000
                    })

                    const token = jwt.sign({ userId }, JWT_SECRET)
                    res.status(200).json({message:'User created successfully', token})
                    return
                })
            })
        } else {
            res.status(400).json(`${username} is already taken please try to sign in` )
            return
        }

    }
})

router.post('/signin', async (req, res) => {

    const body = req.body
    const parseData = userSingIn.safeParse(body)

    if (!parseData.success) {
        res.status(401).json(parseData.error.issues[0].message)
        return
    } else {
   
        const userdata = await users.findOne({ username: parseData.data.username })

        bcrypt.compare(parseData.data.password, userdata.password, (err, result)=>{
            
            if(result){
                const token = jwt.sign({ userId: userdata._id }, JWT_SECRET)
                res.status(200).json({ token })
            }else{
                res.status(400).json({ message: "Username or password is incorrect" })
            }

        })
    }
})

router.put('/updateUser', middleWear, async (req, res) => {

    const data = req.body
    const parseData = updateUserSChema.safeParse(data)

    if (!parseData.success) {
        res.status(401).json(parseData.error.issues[0].message)
        return
    } else {

        bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.hash(parseData.data.password, salt, async (err, hash) => {

                const firstname = parseData.data.firstname
                const lastname = parseData.data.lastname

                await users.updateOne({ _id: req.userId }, {firstname,lastname,password: hash})
                res.status(200).json({ message: "User profile updated successfully" })

            })
        })
    }

})

router.get("/getusers", middleWear, async (req, res) => {

    const usersFilter = req.query.filter || ""

    const user = await users.find({
        $or: [{
            'firstname': { '$regex': usersFilter }
        }, {
            'lastname': { '$regex': usersFilter }
        }]
    })

    res.status(200).json({ data: user })

})

module.exports = router