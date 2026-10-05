const express = require('express')
const router = express.Router()
const { pau } = require('../db')

router.post('/', async (req, res) => {

    const name = typeof req.body.name === 'string' ? req.body.name.trim() : ''

    if (!name) {
        res.status(400).json({ message: 'name is required' })
        return
    }

    const entry = await pau.create({ name })
    res.status(201).json(entry)

})

module.exports = router
