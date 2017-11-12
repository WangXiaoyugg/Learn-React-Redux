
const express = require('express')
const userRouter = require('./user')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const model = require('./model.js')
const Chat = model.getModel('chat')
const app = express()

//work with express
const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection',function(socket){
	console.log('user login')
	socket.on('sendmsg',(data)=>{

		const {from,to,msg} = data
		const chatid = [from,to].sort().join('_')
		Chat.create({chatid,from,to,content:msg},function(err,doc){
			console.log('doc',doc)
			io.emit('recvmsg',Object.assign({},doc))
		})

		// console.log(data)
		// io.emit('recvmsg',data);
	})
})


app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user',userRouter)

server.listen(9093,() => {
	console.log('demo app start at port 9093')
})

