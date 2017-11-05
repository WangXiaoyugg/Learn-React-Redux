import React from  'react'
import { Link, Route,Redirect } from 'react-router-dom'
import { connect  } from 'react-redux'

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
	constructor(props){
		super(props)
	}

	render(){
		const redirectToLogin = <Redirect to='/login'></Redirect>
		const signOut = <button onClick={this.props.logout}>注销</button>
		const app = (
			<div>
				<h1>独立团</h1>
				{this.props.isAuth ? signOut : null }	
				<ul>
					<li>
						<Link to='/dashboard'>一营</Link>
					</li>
					<li>
						<Link to='/dashboard/erying'>二营</Link>
					</li>
					<li>
						<Link to='/dashboard/paobinglian'>炮兵连</Link>
					</li>				
				</ul>
				<Route path='/dashboard' exact component={App}></Route>
				<Route path='/dashboard/erying' component={Erying}></Route>
				<Route path='/dashboard/paobinglian' component={Paobinglian}></Route>
			</div>
		)
		return this.props.isAuth ? app : redirectToLogin
	}
}

export default Dashboard