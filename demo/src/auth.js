import React from  'react'
import { connect } from 'react-redux'
import { login } from './auth.redux.js'
import { Redirect } from 'react-router-dom'

//两个 reducers , 而redux是单向数据流必须进行合并成一reducers
@connect(
	state => state.auth,
	{login}
)
class Auth extends React.Component {
	constructor(props){
		super(props)
	}

	render(){
		const loginToDashboard = <Redirect to='/dashboard'></Redirect>
		return (
			<div>
				{this.props.isAuth ? loginToDashboard : null  }
				<h2>你没有权限只有登录才能查看</h2>
				<button onClick={this.props.login}>登录</button>
			</div>
		)
	}
}

export default Auth