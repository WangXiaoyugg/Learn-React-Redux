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

Router.get('/remove',function(req,res){
	User.remove({},function(err,doc){
		if(err) console.log(err);
		return res.redirect('/user/list')
	})
})

Router.post('/login',function(req,res){
	const {user,pwd} = req.body

	User.findOne({user,pwd:saltMd5(pwd)},{pwd:0},function(err,doc){
		if(!doc){
			return res.json({code:1,msg:'用户名或密码错误'})
		}
		return res.json({code:0,data:doc})
	})	
})

Router.post('/register',function(req,res){
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