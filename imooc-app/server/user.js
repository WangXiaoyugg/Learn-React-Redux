const express = require('express')
const model = require('./model.js')
const User = model.getModel('user')
const Router = express.Router()


Router.get('/list',function(req,res){
	User.find({},function(err,doc){
		if(err) throw new Error(err)
		return res.json(doc)	
	})
})

Router.get('/info',function (req,res) {
	//验证用户的cookie
	return res.json({code:1})
})

module.exports = Router;