const express = require('express')
const model = require('./model.js')
const User = model.getModel('user')
const Chat = model.getModel('chat')
const md5  = require('utility').md5;
const Router = express.Router()

const _filter = {pwd:0,__v:0}

Router.get('/list',function(req,res){
	const {type} = req.query

	User.find({type},_filter,function(err,doc){
		if(err) throw new Error(err)
		return res.json({code:0,data:doc})	
	})
})

Router.get('/getmsglist',function(req,res){
	const user = req.cookies.user
	// {'$or':[{from:user,to:user}]}
	Chat.find({},function(err,doc){
		if(!err){
			return res.json({code:0,msgs:doc})
		}
	})
})

Router.get('/remove',function(req,res){
	User.remove({},function(err,doc){
		if(err) console.log(err);
		return res.redirect('/user/list')
	})
})


Router.post('/update',function(req,res){
	const userId = req.cookies.userId
	if(!userId){
		return res.json({code:1})
	}
	
	const body = req.body
	User.findByIdAndUpdate(userId,body,function(err,doc){
		const data = Object.assign({},{
			user:doc.user,
			type:doc.type,
		},body)
		return res.json({code:0,data})
	})

})

Router.post('/login',function(req,res){
	const {user,pwd} = req.body

	User.findOne({user,pwd:saltMd5(pwd)},_filter,function(err,doc){
		if(!doc){
			return res.json({code:1,msg:'用户名或密码错误'})
		}

		//设置cookie
		res.cookie('userId',doc._id)
		
		return res.json({code:0,data:doc})
	})	
})

//注册时要记住id ,使用 new User()
Router.post('/register',function(req,res){
	const {user,pwd,type} = req.body
	//没有做验证
	User.findOne({user:user},function(err,doc){
		if(doc){
			return res.json({code:1,msg:'用户名已存在'})
		}
	})

	const userModel = new User({user,type,pwd:saltMd5(pwd)})
	userModel.save(function(e,d){
		if(e){
			return res.json({code:1,msg:"用户创建失败，请重试"})
		}
		const {user,type,_id} = d

		//注册成功也要写入cookie
		res.cookie('userId',_id)

		return res.json({code:0,data:{user,type,_id}})
	})

	
})

function saltMd5(pwd){
	var salt = 'imooc_chat_app_!@#$%^&~*()_+'
	return  md5(md5(pwd+salt));
}

//验证用户的登录信息
Router.get('/info',function (req,res) {
	//获取cookie
	const {userId} = req.cookies

	//验证用户的cookie	
	if(!userId){
		return res.json({code:1})

	}

	User.findOne({_id:userId},_filter,function(err,doc){
		if(err){
			return res.json({code:1,msg:'后台出错了'})
		}
		if(doc){
			return res.json({code:0,data:doc})
		}
	})

})

module.exports = Router;