import React from  'react'
import { connect } from 'react-redux'
import { login,getUserData } from './auth.redux.js'
import { Redirect } from 'react-router-dom'
import { Button } from 'antd-mobile'

//两个 reducers , 而redux是单向数据流必须进行合并成一reducers
@connect(
	state => state.auth,
	{login,getUserData}
)
class Auth extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			data:[] 		
		}
	}

	componentDidMount(){
		// axios.get('/data').then(res => {
		// 	if(res.status === 200){
		// 		this.setState({
		// 			data:res.data
		// 		})
		// 	}
		// })
		this.props.getUserData()
	}

	render(){
		const loginToDashboard = <Redirect to='/dashboard'></Redirect>
		return (
			<div>
				<h2>我的名字是{this.props.user},年龄是{this.props.age}</h2>
				{this.props.isAuth ? loginToDashboard : null  }
				<h2>你没有权限只有登录才能查看</h2>
				<Button type="primary" onClick={this.props.login}>登录</Button>
			</div>
		)
	}
}

export default Auth