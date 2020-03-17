require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// middleware section
app.use(bodyParser.json())
app.use(bodyParser.urlencoded( {extended: true} ))

// import transactions router V1
const RouterV1 = require('./routes/transactionRoutesV1')
app.use(RouterV1)

// import transactions router V2
const RouterV2 = require('./routes/transactionRoutesV2')
app.use(RouterV2)

const PORT = process.env.PORT || 3000
const HOSTNAME = process.env.HOSTNAME
app.listen(PORT, HOSTNAME, () => {
  console.log('Server is listening at: '+HOSTNAME+':'+PORT)
})
