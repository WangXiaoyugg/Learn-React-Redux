import React from  'react'
import { Link, Route,Redirect } from 'react-router-dom'
import { connect  } from 'react-redux'
import { Button } from 'antd-mobile'

import App from './app'
import {logout} from './auth.redux.js' 

function Erying(){
	return <h2>二营</h2>
}

function Paobinglian(){
	return <h2>炮兵连</h2>
}

@connect(
	state => state.auth,
	{ logout }
)
class Dashboard extends React.Component {

	render(){
		const match = this.props.match
		const redirectToLogin = <Redirect to='/login'></Redirect>
		const signOut = <Button  type='primary' onClick={this.props.logout}>注销</Button>
		const app = (
			<div>
				<h1>独立团</h1>
				{this.props.isAuth ? signOut : null }	
				<ul>
					<li>
						<Link to={`${match.url}/`}>一营</Link>
					</li>
					<li>
						<Link to={`${match.url}/erying`}>二营</Link>
					</li>
					<li>
						<Link to={`${match.url}/paobinglian`}>炮兵连</Link>
					</li>				
				</ul>
				<Route path={`${match.url}/`} exact component={App}></Route>
				<Route path={`${match.url}/erying`} component={Erying}></Route>
				<Route path={`${match.url}/paobinglian`} component={Paobinglian}></Route>
			</div>
		)
		return this.props.isAuth ? app : redirectToLogin
	}
}

export default Dashboard