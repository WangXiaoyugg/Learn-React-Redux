const express = require('express')

const mongoose = require('mongoose')

//链接mongo,并且使用imooc 这个集合
const DB_URL = 'mongodb://127.0.0.1:27017/imooc'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',() => {
	console.log('mongo connected success')
})

//文档 字段的概念
//定义文档模型，类型于表结构
const User = mongoose.model('user',new mongoose.Schema({
	user:{type:String,require:true},
	age:{type:Number,require:true},
}))

// 新建用户
User.create({
	user:'xiaohua',
	age:20
},(err,doc) => {
	if(!err){
		console.log(doc)
	}else{
		console.log(err)
	}
})

// 删除用户
User.remove({age:20},(err,doc) => {
	console.log(doc)
})

// User.update({'user':"xiaohua"},{$set:{age:100}},(err,doc) =>{
// 	console.log(doc);
// })

//查询用户
const app = express();


app.get('/',(req,res) => {
	User.find({},function(err,doc){
		 res.json(doc);
	})
})

app.get('/data',(req,res) => {
	User.find({},function(err,doc){
		 res.json(doc);
	})
})

app.listen(9093,() => {
	console.log('demo app start at port 9093')
})

