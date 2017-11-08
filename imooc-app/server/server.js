
const express = require('express')
const userRouter = require('./user')
const mongoose = require('mongoose')
const app = express();

app.use('/user',userRouter)

app.listen(9093,() => {
	console.log('demo app start at port 9093')
})

