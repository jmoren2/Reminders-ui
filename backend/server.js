const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routes = require('./routes/routes')
const cors = require('cors')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("DB connected successfully"))

app.use(express.json())
app.use(cors())
app.use('/api', routes)
app.listen(4000, () => {
    console.log('listening..')
})