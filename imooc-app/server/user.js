const express = require('express')
const model = require('./model.js')
const User = model.getModel('user')
const md5  = require('utility').md5;
const Router = express.Router()


Router.get('/list',function(req,res){
	User.find({},function(err,doc){
		if(err) throw new Error(err)
		return res.json(doc)	
	})
})

Router.post('/register',function(req,res){
	console.log(req.body)
	const {user,pwd,type} = req.body
	//没有做验证
	User.findOne({user:user},function(err,doc){
		if(doc){
			return res.json({code:1,msg:'用户名已存在'})
		}
	})

	User.create({user,type,pwd:saltMd5(pwd)},function(err,doc){
		if(err) res.json({code:1,msg:"用户创建失败，请重试"})
		return res.json({code:0})		
	})
})

function saltMd5(pwd){
	var salt = 'imooc_chat_app_!@#$%^&~*()_+'
	return  md5(md5(pwd+salt));
}

Router.get('/info',function (req,res) {
	//验证用户的cookie
	return res.json({code:1})
})

module.exports = Router;