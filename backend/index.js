const express = require("express");
const port = 3000
const app = express();
const { router } = require("./routes/index");
const cors = require('cors')

// CORS configuration
const corsOptions = {
    origin: 'https://paytm-axue.vercel.app', // Replace with your frontend URL
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true // Enable if sending cookies or authorization headers
  };
  
app.use(cors(corsOptions));
app.use(express.json())
app.use('/api/v1', router)

app.listen(port);