const express = require('express')
const app = express()
const helmet = require('helmet')
const cors = require('cors')
require('dotenv').config()

app.use(helmet())
app.use(cors())

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api', require('./routes'))

app.listen(3000, () => {
  console.log("localhost:3000");
})

