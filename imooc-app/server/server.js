
const express = require('express')
const userRouter = require('./user')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const app = express()

//work with express
const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection',function(socket){
	console.log('user login')
})


app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user',userRouter)

server.listen(9093,() => {
	console.log('demo app start at port 9093')
})

