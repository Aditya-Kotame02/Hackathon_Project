const express = require('express')
const cors = require('cors')

const authenticateUser = require('./utils/authUser') 
const userRouter = require('./routes/user')
const CategoryRouter = require('./routes/category')
const blogsRouter = require('./routes/blogs')

const app = express()

app.use(cors())
app.use(express.json())
app.use(authenticateUser)
app.use('/user', userRouter)
app.use('/category', CategoryRouter)
app.use('/blogs', blogsRouter)


app.listen(4000,'localhost',() => {
    console.log("Server Started At Port 4000")
})


