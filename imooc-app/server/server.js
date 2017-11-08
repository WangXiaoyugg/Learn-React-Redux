
const express = require('express')
const userRouter = require('./user')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parse')
const bodyParser = require('body-parser')

const app = express()

app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user',userRouter)

app.listen(9093,() => {
	console.log('demo app start at port 9093')
})

