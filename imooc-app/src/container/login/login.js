import React from 'react'
import Logo from '../../component/logo/logo.js'
import {List, InputItem, WingBlank, WhiteSpace,Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { login } from '../../redux/user.redux.js'
import { Redirect } from 'react-router-dom'
import imoocForm from '../../component/imoocForm/imoocForm.js'




@connect(
	state => state.user,
	{ login }
)
@imoocForm
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

	handleLogin(){
		this.props.login(this.props.state)
	}

	render(){
		return (
			<div>
				{this.props.redirectTo && this.props.redirectTo !== '/login' ? <Redirect to={this.props.redirectTo}></Redirect> : null}
				<Logo></Logo>
				<WingBlank>
					<List>
						{this.props.msg ? <p className="error-Msg">{this.props.msg}</p>:null}
						<InputItem onChange={(v) => this.props.handleChange('user',v)}>用户</InputItem>
						<WhiteSpace/>
						<InputItem type='password' onChange={(v) => this.props.handleChange('pwd',v)}>密码</InputItem>
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