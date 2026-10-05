const express = require("express");
const port = 3000
const app = express();
const { router } = require("./routes/index");
const cors = require('cors')
const mongoose = require('mongoose')

app.use(cors())
app.use(express.json())
app.get('/health', (req, res) => {
    const db = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
    res.status(db === 'connected' ? 200 : 503).json({ status: db === 'connected' ? 'ok' : 'error', db })
})
app.use('/api/v1', router)

app.listen(port);