const express = require('express')
const cors = require('cors')

const authenticateUser = require('./utils/authUser') 

const app = express()

app.use(cors())
app.use(express.json())
app.use(authenticateUser)

console.log("Hello")

app.listen(4000,'localhost',() => {
    console.log("Server Started At Port 4000")
})
