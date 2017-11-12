import React from 'react'
import Logo from '../../component/logo/logo.js'
import {List, InputItem, WingBlank, WhiteSpace,Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { login } from '../../redux/user.redux.js'
import { Redirect } from 'react-router-dom'



@WrapperHello
class Hello extends React.Component {
	render(){
		return <h2>hello I love react and redux</h2>
	}
}

//属性代理
function WrapperHello(Comp){

	//反向继承
	class WrapComp extends Comp{
		componentDidMount(){
			console.log('高阶组件新增的生命周期')
		}
		render(){
			return <Comp></Comp>
		}
	}




	// class WrapComp extends React.Component{

	// 	render(){
	// 		return(
	// 			<div>
	// 				<p>高阶组件</p>
	// 				<Comp {...this.props}></Comp>
	// 			</div>

	// 		)
			
	// 	}
	// }
	return WrapComp
}



@connect(
	state => state.user,
	{ login }
)
class Login extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			user:'',
			pwd:'',
		}
		this.register = this.register.bind(this)
		this.handleLogin = this.handleLogin.bind(this)
	}

	register(){
		this.props.history.push('/register')
	}

	handleChange(key,val){
		this.setState({
			[key]:val
		})
	}

	handleLogin(){
		this.props.login(this.state)
	}

	render(){
		return (
			<div>
				<Hello/>
				{this.props.redirectTo && this.props.redirectTo !== '/login' ? <Redirect to={this.props.redirectTo}></Redirect> : null}
				<Logo></Logo>
				<WingBlank>
					<List>
						{this.props.msg ? <p className="error-Msg">{this.props.msg}</p>:null}
						<InputItem onChange={(v) => this.handleChange('user',v)}>用户</InputItem>
						<WhiteSpace/>
						<InputItem type='password' onChange={(v) => this.handleChange('pwd',v)}>密码</InputItem>
					</List>
					<WhiteSpace/>
					<Button type='primary' onClick={this.handleLogin}>登录</Button>
					<WhiteSpace/>
					<Button type='primary' onClick={this.register}>注册</Button>
				</WingBlank>
			</div>
		)
	}
}

export default Login